import React from "react";
import Image from "next/image";

const NominatedMovieItem = ({ nominatedMovies }) => {
  return (
    <div>
      {nominatedMovies.map((movie) => {
        if (movie.Type === "movie") {
          return (
            <li
              key={movie.imdbID}
              className="flex flex-col items-center m-4 bg-white rounded-lg shadow md:flex-row md:max-w-xl  hover:bg-gray-100"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={movie.Poster}
                alt=""
              />

              <div className="flex flex-col justify-between md:pl-4 pt-4 px-1 leading-normal">
                {movie.detailedMovie && (
                  <h1 className="mt-0 text-2xl font-bold text-gray-900 tracing-tight text-center md:text-left">
                    {movie.detailedMovie.Title}
                  </h1>
                )}
                {movie.detailedMovie && (
                  <p className=" text-gray-500 ">{movie.detailedMovie.Genre}</p>
                )}
                <br />
                {movie.detailedMovie && (
                  <p className="text-gray-500">
                    {movie.detailedMovie.Released}
                  </p>
                )}
                {movie.detailedMovie && (
                  <p className="text-gray-500 ">
                    {movie.detailedMovie.Runtime}
                  </p>
                )}
                {movie.detailedMovie && (
                  <p className="text-gray-500 ">
                    {movie.detailedMovie.imdbRating}
                  </p>
                )}
                {movie.detailedMovie && (
                  <p className="mb-0 text-gray-500">
                    {movie.detailedMovie.Awards}
                  </p>
                )}
              </div>
              <button class="w-full md:w-fit relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span class="w-full md:w-fit relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Remove
                </span>
              </button>
            </li>
          );
        }
      })}
    </div>
  );
};

export default NominatedMovieItem;
