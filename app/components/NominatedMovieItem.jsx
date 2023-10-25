import React from "react";
import Image from "next/image";

const NominatedMovieItem = ({ nominatedMovies, onRemoveClick }) => {
  const handleRemoveClick = (movieID) => {
    onRemoveClick(movieID);
  };

  return (
    <div>
      {nominatedMovies.map((movie) => {
        return (
          <li
            key={movie.imdbID}
            className="flex flex-col md:flex-row items-center justify-between m-4 bg-white rounded-lg shadow md:max-w-xl text-xs md:text-sm  hover:bg-gray-100"
          >
            <div className="object-cover w-full flex items-center justify-center rounded-t-lg md:h-auto md:w-48 ">
              <Image
                className="md:rounded-l-lg"
                src={movie.Poster}
                alt="movie poster"
                width={200}
                height={300}
              />
            </div>
            <div className="flex flex-col justify-between md:pl-4 pt-4 px-1 my-4 leading-normal text-[#c79f27]">
              {movie.detailedMovie && (
                <h3 className="mt-0 font-bold tracing-tight text-center md:text-left">
                  {movie.detailedMovie.Title}
                </h3>
              )}
              {movie.detailedMovie && (
                <p className="hidden md:inline-block text-gray-500 text-xs">
                  {movie.detailedMovie.Genre}
                </p>
              )}
              <br />
              {movie.detailedMovie && (
                <p className="hidden md:inline-block  text-gray-500 text-xs">
                  Release Date: {movie.detailedMovie.Released}
                </p>
              )}
              {movie.detailedMovie && (
                <p className="hidden md:inline-block  text-gray-500 text-xs">
                  Runtime: {movie.detailedMovie.Runtime}
                </p>
              )}
              {movie.detailedMovie && (
                <p className="hidden md:inline-block  text-gray-500 text-xs">
                  IMDB Rating: {movie.detailedMovie.imdbRating}/10.0
                </p>
              )}
              {movie.detailedMovie && (
                <p className="hidden md:inline-block  text-gray-500 text-xs">
                  Awards: {movie.detailedMovie.Awards}
                </p>
              )}
            </div>
            <div className="w-full md:w-fit">
              <button
                onClick={() => handleRemoveClick(movie.imdbID)}
                className="w-full md:w-fit relative inline-flex items-center justify-center p-0.5 md:mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-red-500 to-orange-400 group-hover:from-red-500 group-hover:to-orange-400 hover:text-white"
              >
                <span className="w-full md:w-fit relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-200 bg-opacity-50 text-gray-100 rounded-md group-hover:bg-opacity-0">
                  Remove
                </span>
              </button>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default NominatedMovieItem;
