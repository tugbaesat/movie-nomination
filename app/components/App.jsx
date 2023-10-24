"use client";
import React, { useState, useEffect } from "react";
import SearchMovie from "./SearchMovie";
import SearchedMoviesList from "./SearchedMoviesList";
import NominatedMoviesList from "./NominatedMoviesList";
import Intro from "./Intro";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [nominatedMovies, setNominatedMovies] = useState([]);

  const fetchMovieData = async (searchTerm) => {
    const API_URL = `http://www.omdbapi.com/?s=${searchTerm}&apikey=702528a6`;
    const response = await fetch(API_URL);
    const data = await response.json();
    const search = data.Search;

    if (data.Response == "True") setMovies(search);
  };

  useEffect(() => {
    fetchMovieData(searchTerm);
  }, [searchTerm]);

  const fetchMovieIMDBData = async (movie) => {
    const API_URL = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=702528a6`;
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  };

  const onSearchMovie = (searchParam) => {
    setSearchTerm(searchParam);
    fetchMovieData(searchParam);
  };

  const onNominateClick = async (movie) => {
    setNominatedMovies((prevNominatedMovies) => [
      ...prevNominatedMovies,
      movie,
    ]);

    const detailedMovie = await fetchMovieIMDBData(movie);
    setNominatedMovies((prevNominatedMovies) => {
      const updatedNominatedMovies = prevNominatedMovies.map((nominatedMovie) =>
        nominatedMovie.imdbID === movie.imdbID
          ? { ...nominatedMovie, detailedMovie }
          : nominatedMovie
      );
      return updatedNominatedMovies;
    });
  };

  useEffect(() => {
    const fetchNominatedMovieDetails = async () => {
      const promises = nominatedMovies.map((movie) =>
        fetchMovieIMDBData(movie)
      );
      const movieDetails = await Promise.all(promises);

      setNominatedMovies((prevNominatedMovies) =>
        prevNominatedMovies.map((nominatedMovie, index) => ({
          ...nominatedMovie,
          detailedMovie: movieDetails[index],
        }))
      );
    };
    fetchNominatedMovieDetails();
  }, [nominatedMovies]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="flex flex-col gap-6 bg-[#c79f27] text-white py-24 px-8">
        <Intro />
        <SearchMovie
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearchMovie={onSearchMovie}
        />
        {searchTerm && movies.length > 0 ? (
          <SearchedMoviesList
            movies={movies}
            onNominateClick={onNominateClick}
          />
        ) : null}
      </div>
      <div className="bg-slate-100 text-[#c79f27] pt-24 px-8">
        <NominatedMoviesList nominatedMovies={nominatedMovies} />
      </div>
    </div>
  );
};

export default App;
