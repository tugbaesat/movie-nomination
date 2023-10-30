import React, { useState } from "react";
import Image from "next/image";

const WinnerMovieButton = ({ nominatedMovies }) => {
  const [winnerMovie, setWinnerMovie] = useState(null);

  const handleWinnerMovie = () => {
    const randomIndex = Math.floor(Math.random() * nominatedMovies.length);
    const movie = nominatedMovies[randomIndex];
    setWinnerMovie(movie);
  };

  return (
    <main>
      <button
        className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-red-500 to-orange-400 group-hover:from-red-500 group-hover:to-orange-400 hover:text-white"
        onClick={handleWinnerMovie}
      >
        <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-200 bg-opacity-50 text-gray-100 rounded-md group-hover:bg-opacity-0">
          Reveal Winner!
        </span>
      </button>
      {winnerMovie && (
        <li
          key={winnerMovie.imdbID}
          className="flex flex-col md:flex-row items-center justify-between m-4 bg-white rounded-lg shadow md:max-w-xl text-xs md:text-sm hover:bg-gray-100"
        >
          <div className="object-cover w-full flex items-center justify-center rounded-t-lg md:h-auto md:w-48">
            <Image
              className="md:rounded-l-lg"
              src={winnerMovie.Poster}
              alt="movie poster"
              width={200}
              height={300}
            />
          </div>
          <div className="flex flex-col justify-between md:pl-4 pt-4 px-1 my-4 leading-normal text-[#c79f27]">
            <h3 className="mt-0 font-bold tracing-tight text-center md:text-left">
              {winnerMovie.Title}
            </h3>
            <p className="hidden md:inline-block text-gray-500 text-xs">
              {winnerMovie.Genre}
            </p>
            <br />
            <p className="hidden md:inline-block text-gray-500 text-xs">
              Release Date: {winnerMovie.Released}
            </p>
            <p className="hidden md:inline-block text-gray-500 text-xs">
              Runtime: {winnerMovie.Runtime}
            </p>
            <p className="hidden md:inline-block text-gray-500 text-xs">
              IMDB Rating: {winnerMovie.imdbRating}/10.0
            </p>
            <p className="hidden md:inline-block text-gray-500 text-xs">
              Awards: {winnerMovie.Awards}
            </p>
          </div>
          
        </li>
      )}
    </main>
  );
};

export default WinnerMovieButton;
