import React, { useState } from "react";

const SearchedMovieItem = ({ movies, onNominateClick }) => {
    const [selectedMovies, setSelectedMovies] = useState([]);
    const filteredMovies = movies.slice(0, 5);
    const handleNominateClick = (movie) => {
      onNominateClick(movie);
      setSelectedMovies((prevSelectedMovies) => [
        ...prevSelectedMovies,
        movie.imdbID,
      ]);
    };
  
  return (
    <div>
      {filteredMovies.map((movie) => {
        if (movie.Type == "movie" && movie.Poster !== "N/A") {
        const isSelected = selectedMovies.includes(movie.imdbID);
          return (
            <li
              key={movie.imdbID}
              className="flex flex-col md:flex-row items-center justify-between h-auto overflow-hidden border rounded-lg shadow my-4 p-4"
            >
              <div className="grid content-center px-4  ">
                <h1 className="text-sm">{movie.Title}</h1>
                <h2 className="text-sm">{movie.Year}</h2>
              </div>
              <div className="grid content-center">
                <button
                  className={` relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg  ${
                    isSelected
                      ? "bg-gray-300 cursor-not-allowed"
                      : "group bg-gradient-to-br from-black to-[#c79f27] group-hover:from-black group-hover:to-[#daab20] hover:text-white"
                  }`}
                  onClick={() => handleNominateClick(movie)}
                  disabled={isSelected}
                >
                             <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-200 bg-opacity-0 text-gray-100 rounded-md">
                  Nominate
                </span>
                </button>
              </div>
            </li>
          );
        }
      })}
    </div>
  );
};

export default SearchedMovieItem;
