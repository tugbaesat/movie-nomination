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
            className="flex flex-col md:flex-row items-center justify-between m-4 bg-white rounded-lg shadow md:max-w-xl text-xs md:text-sm hover:bg-gray-100"
          >
            <div className="flex ">
              <div className="object-cover w-full flex items-center justify-center rounded-t-lg md:h-auto md:w-32 ">
                <Image
                  className="md:rounded-l-lg"
                  src={movie.Poster}
                  alt="movie poster"
                  width={200}
                  height={300}
                />
              </div>
              {movie.detailedMovie && (
                <div className="flex flex-col justify-between md:pl-4 pt-4 px-1 my-4 leading-normal text-[#c79f27]">
                  <h3 className="mt-0 font-bold tracing-tight text-center md:text-left">
                    {movie.detailedMovie.Title}
                  </h3>

                  <p className="hidden md:inline-block text-gray-500 text-xs">
                    {movie.detailedMovie.Genre}
                  </p>

                  <br />

                  <p className="hidden md:inline-block  text-gray-500 text-xs">
                    Release Date: {movie.detailedMovie.Released}
                  </p>

                  <p className="hidden md:inline-block  text-gray-500 text-xs">
                    Runtime: {movie.detailedMovie.Runtime}
                  </p>
                  <p className="hidden md:inline-block  text-gray-500 text-xs">
                    IMDB Rating: {movie.detailedMovie.imdbRating}/10.0
                  </p>

                  <p className="hidden md:inline-block  text-gray-500 text-xs">
                    Awards: {movie.detailedMovie.Awards}
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={() => handleRemoveClick(movie.imdbID)}
              className="relative text-white text-sm p-2 m-2 font-medium rounded-full bg-gradient-to-br from-red-500 to-red-400  hover:from-red-500 hover:to-red-500 "
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                transition: "background-color 0.3s",
              }}
            >
              <span className="">x</span>
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default NominatedMovieItem;
