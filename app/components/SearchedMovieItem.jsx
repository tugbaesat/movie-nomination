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
        if (movie.Type == "movie") {
          const isSelected = selectedMovies.includes(movie.imdbID);
          return (
            <li
              key={movie.imdbID}
              className="flex flex-col h-auto overflow-hidden border rounded shadow"
            >
              <div className="grid content-center px-4  ">
                <h1 className="text-sm">{movie.Title}</h1>
                <h2 className="text-sm">{movie.Year}</h2>
              </div>
              <div className="grid content-center">
                <button
                  className={`px-4 py-2 font-bold text-white border-b-4 rounded border-cyan-700  ${
                    isSelected
                      ? "bg-gray-300 cursor-not-allowed"
                      : "hover:bg-sky-300 hover:border-cyan-800 bg-sky-200"
                  }`}
                  onClick={() => handleNominateClick(movie)}
                  disabled={isSelected}
                >
                  Nominate
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
