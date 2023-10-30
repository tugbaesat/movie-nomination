"use client";
import React, { useState, useEffect } from "react";
import SearchMovie from "./SearchMovie";
import SearchedMoviesList from "./SearchedMoviesList";
import NominatedMoviesList from "./NominatedMoviesList";
import Intro from "./Intro";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WinnerMovieButton from "./WinnerMovieButton";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [nominatedMovies, setNominatedMovies] = useState([]);

  const notify = () =>
    toast.error("You have reached the maximum number of nominated movies!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    fetchMovieData(searchTerm);
  }, [searchTerm]);

  const fetchMovieData = async (searchTerm) => {
    const API_URL = `https://www.omdbapi.com/?s=${searchTerm}&apikey=702528a6`;
    const response = await fetch(API_URL);
    const data = await response.json();
    const search = data.Search;

    if (data.Response == "True") setMovies(search);
  };

  const fetchMovieIMDBData = async (movie) => {
    const API_URL = `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=702528a6`;
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  };

  const onSearchMovie = (searchParam) => {
    setSearchTerm(searchParam);
    fetchMovieData(searchParam);
  };

  const onNominateClick = async (movie) => {
    try {
      if (nominatedMovies.length < 5) {
        const detailedMovie = await fetchMovieIMDBData(movie);
        setNominatedMovies((prevNominatedMovies) => [
          ...prevNominatedMovies,
          { ...movie, detailedMovie },
        ]);
        setSearchTerm("");
      } else {
        notify();
      }
    } catch (error) {
      console.error("Error fetching or adding the movie:", error);
    }
  };

  const onRemoveClick = (movieID) => {
    const newMovieList = nominatedMovies.filter(
      (movie) => movie.imdbID !== movieID
    );
    setNominatedMovies(newMovieList);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="flex flex-col gap-6 bg-[#c79f27] text-white py-12 px-8">
        <Intro />
        <SearchMovie
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearchMovie={onSearchMovie}
        />
        {nominatedMovies.length === 5 ? (
          <WinnerMovieButton nominatedMovies={nominatedMovies} />
        ) : searchTerm && movies.length > 0 ? (
          <SearchedMoviesList
            movies={movies}
            onNominateClick={onNominateClick}
          />
        ) : null}
      </div>
      <div className="bg-slate-100 text-[#c79f27] pt-12 px-8">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
        {nominatedMovies.length > 0 ? (
          <NominatedMoviesList
            nominatedMovies={nominatedMovies}
            onRemoveClick={onRemoveClick}
          />
        ) : null}
      </div>
    </div>
  );
};

export default App;
