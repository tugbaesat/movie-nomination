import React from "react";
import Image from "next/image";
import imdb from "../../public/images/icons8-imdb-48.png";

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
            // className="flex flex-col md:flex-row items-center justify-between m-4 md:max-w-xl text-xs md:text-md text-gray-100 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-lg"
            className="flex flex-col md:flex-row items-center justify-between h-auto overflow-hidden hover:border rounded-lg shadow my-4 "
          >
            <div className="flex ">
              <div className="object-cover w-full flex items-center justify-center rounded-t-lg md:h-auto md:w-32 ">
                <Image
                  className="md:rounded-lg"
                  src={movie.Poster}
                  alt="movie poster"
                  width={200}
                  height={300}
                />
              </div>
              {movie.detailedMovie && (
                <div className="flex flex-col justify-between md:pl-4 pt-4 px-1 my-4 leading-normal text-[#c79f27] font-bold">
                  <h3 className="mt-0 tracing-tight text-center md:text-left text-lg">
                    {movie.detailedMovie.Title}
                  </h3>

                  <p className="hidden md:inline-block text-md">
                    {movie.detailedMovie.Genre}
                  </p>
                  <p className="hidden md:inline-block text-xs">
                  {movie.detailedMovie.Released}
                  </p>
                  <p className="hidden md:inline-block text-xs justify-end">
                    <Image
                      width="34"
                      height="34"
                      src={imdb}
                      alt="imdb"
                      className="inline mr-2"
                    />
                    <span>{movie.detailedMovie.imdbRating}/10.0</span>
                    
                  </p>

                  {/* <p className="hidden md:inline-block text-xs">
                    Awards: {movie.detailedMovie.Awards}
                  </p> */}

                  {/* <p className="hidden md:inline-block text-xs">
                    Runtime: {movie.detailedMovie.Runtime}
                  </p> */}
                </div>
              )}
            </div>

            <button
              onClick={() => handleRemoveClick(movie.imdbID)}
              className="flex items-center justify-center text-white text-sm p-2 m-2 font-medium rounded-full bg-gradient-to-br from-black to-[#c79f27] group-hover:from-black group-hover:to-[#daab20] hover:text-white"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                transition: "background-color 0.3s",
              }}
            >
              <span>x</span>
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default NominatedMovieItem;
