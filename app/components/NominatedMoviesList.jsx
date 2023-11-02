import React from "react";
import NominatedMovieItem from "./NominatedMovieItem";

const NominatedMoviesList = ({ nominatedMovies, onRemoveClick }) => {
  return (
    <div className="flex flex-col p-4 mb-6">
      <h2 className="relative text-[#c79f27] md:text-3xl">
        Nomination List{" "}
        <span className="absolute right-0 md:text-xl">{nominatedMovies.length}/5</span>
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
