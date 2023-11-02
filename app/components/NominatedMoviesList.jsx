import React from "react";
import NominatedMovieItem from "./NominatedMovieItem";

const NominatedMoviesList = ({ nominatedMovies, onRemoveClick }) => {
  return (
    <div className="flex flex-col bg-white bg-opacity-70 rounded-lg p-4 mb-6">
      <h2 className="relative text-[#675621] ">
        Nomination List{" "}
        <span className="absolute right-0">{nominatedMovies.length}/5</span>
      </h2>
      <ul className="flex flex-col gap-4">
        <NominatedMovieItem
          nominatedMovies={nominatedMovies}
          onRemoveClick={onRemoveClick}
        />
      </ul>
    </div>
  );
};

export default NominatedMoviesList;
