"use client";
import React, { useState, useEffect } from "react";
import SearchMovie from "./SearchMovie";
import SearchedMoviesList from "./SearchedMoviesList";
import NominatedMoviesList from "./NominatedMoviesList";
import Intro from "./Intro";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import WinnerMovieButton from "./WinnerMovieButton";
import "../globals.css";
import WinnerMovieReveal from "./WinnerMovieReveal";
import Image from "next/image";
import oscars from "../../public/images/oscar-logo.jpg";


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [winnerMovie, setWinnerMovie] = useState(null);

  // const notify = () =>
  //   toast.error("You have reached the maximum number of nominated movies!", {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });

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
      const isNominated = nominatedMovies.some(
        (nominatedMovie) => nominatedMovie.imdbID === movie.imdbID
      );

      if (!isNominated && nominatedMovies.length < 5) {
        const detailedMovie = await fetchMovieIMDBData(movie);
        setNominatedMovies((prevNominatedMovies) => [
          ...prevNominatedMovies,
          { ...movie, detailedMovie },
        ]);
        setSearchTerm("");
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

  const onRestart = () => {
    setNominatedMovies([]);
    setSearchTerm("");
    setWinnerMovie("");
  };

  const handleWinnerMovie = () => {
    const randomIndex = Math.floor(Math.random() * nominatedMovies.length);
    const movie = nominatedMovies[randomIndex];
    setWinnerMovie(movie);
  };

  return (
    <div className=" bg-black">
      {winnerMovie ? (
        <div className="h-screen oscars-bg ">
          <WinnerMovieReveal
            nominatedMovies={nominatedMovies}
            onRestart={onRestart}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-black h-screen">
          <div className="flex flex-col gap-6 text-[#c79f27] py-12 px-8  bg-black ">
            <Intro />
            <SearchMovie
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              onSearchMovie={onSearchMovie}
            />
            {nominatedMovies.length === 5 ? (
              <WinnerMovieButton handleWinnerMovie={handleWinnerMovie} />
            ) : searchTerm && movies.length > 0 ? (
              <SearchedMoviesList
                movies={movies}
                onNominateClick={onNominateClick}
              />
            ) : null}
          </div>
          <div className=" text-[#c79f27] pt-12 px-8 bg-black ">
            {/* <ToastContainer
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
        /> */}
            {/* Same as */}
            {/* <ToastContainer /> */}
            {nominatedMovies.length > 0 ? (
              <NominatedMoviesList
                nominatedMovies={nominatedMovies}
                onRemoveClick={onRemoveClick}
              />
            ) :
            <div className="flex justify-center items-center h-screen"><Image
            className=""
            src={oscars}
            alt="movie poster"
            width={700}
            height={900}
          /></div> }
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
