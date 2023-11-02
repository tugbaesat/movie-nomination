import React, { useState } from "react";
import SearchedMovieItem from "./SearchedMovieItem";

const SearchedMoviesList = ({ movies, onNominateClick }) => {
  return (
    <div className="container flex flex-col flex-wrap items-center justify-start m-auto max-w-screen-sm">
      <ul className="w-11/12 p-3">
        <SearchedMovieItem movies={movies} onNominateClick={onNominateClick} />
      </ul>
    </div>
  );
};

export default SearchedMoviesList;
