"use client";
import React, { useState, useEffect } from "react";
import SearchMovie from "./SearchMovie";
import SearchedMoviesList from "./SearchedMoviesList";
import NominatedMoviesList from "./NominatedMoviesList";
import Intro from "./Intro";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  // const onNominateClick = async (movie) => {
  //   if (nominatedMovies.length < 5) {
  //     setNominatedMovies((prevNominatedMovies) => [
  //       ...prevNominatedMovies,
  //       movie,
  //     ]);
  //     const detailedMovie = await fetchMovieIMDBData(movie);
  //     setNominatedMovies((prevNominatedMovies) => {
  //       const updatedNominatedMovies = prevNominatedMovies.map(
  //         (nominatedMovie) =>
  //           nominatedMovie.imdbID === movie.imdbID
  //             ? { ...nominatedMovie, detailedMovie }
  //             : nominatedMovie
  //       );
  //       return updatedNominatedMovies;
  //     });
  //   } else {
  //     notify();
  //   }
  // };

  // const onNominateClick = async (movie) => {
  //   if (nominatedMovies.length < 5) {
  //     const detailedMovie = await fetchMovieIMDBData(movie);
  //     setNominatedMovies((prevNominatedMovies) => [
  //       ...prevNominatedMovies,
  //       { ...movie, detailedMovie },
  //     ]);
  //   } else {
  //     notify();
  //   }
  // };

  //   const onNominateClick = async (movie) => {
  //     console.log(movie.imdbID)
  //     const detailedMovie = await fetchMovieIMDBData(movie);
  // console.log(detailedMovie)
  // setNominatedMovies((prevNominatedMovies) => [
  //   ...prevNominatedMovies,
  //   detailedMovie,
  // ]);
  //   }

    // const onNominateClick = async (movie) => {
    //   try {
    //     console.log(movie.imdbID);
    //     const detailedMovie = await fetchMovieIMDBData(movie);
    //     console.log(detailedMovie);
    //       setNominatedMovies((prevNominatedMovies) => [
    //       ...prevNominatedMovies,
    //       detailedMovie,
    //     ]);
    //   } catch (error) {
    //     console.error("Error fetching or adding the movie:", error);
    //   }
    // };

    const onNominateClick = async (movie) => {
      try {
        console.log(movie.imdbID);
        const detailedMovie = await fetchMovieIMDBData(movie);
        console.log(detailedMovie);
    
        // Add the fetched movie to the nominatedMovies array along with detailed data.
        setNominatedMovies((prevNominatedMovies) => [
          ...prevNominatedMovies,
          { ...movie, detailedMovie },
        ]);
        console.log(nominatedMovies);
      } catch (error) {
        // Handle any errors that may occur during the fetch or processing of the movie data.
        console.error("Error fetching or adding the movie:", error);
      }
    };
    

  const onRemoveClick = (movieID) => {
    const newMovieList = nominatedMovies.filter(
      (movie) => movie.imdbID !== movieID
    );
    if (newMovieList.length > 0) {
      setNominatedMovies(newMovieList);
    } else {
      setNominatedMovies([]);
    }
  };

  useEffect(() => {
    fetchMovieData(searchTerm);
  }, [searchTerm]);

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
      <div className="flex flex-col gap-6 bg-[#c79f27] text-white py-12 px-8">
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
