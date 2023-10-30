import React from "react";
import NominatedMovieItem from "./NominatedMovieItem";


const NominatedMoviesList = ({ nominatedMovies, onRemoveClick}) => {
  return (
    <div className="flex flex-col">
      
      <h2 className="relative">Nomination List <span className="absolute right-0">{nominatedMovies.length}/5</span></h2>
      <ul className="flex flex-col items-center gap-4">
       <NominatedMovieItem nominatedMovies={nominatedMovies} onRemoveClick={onRemoveClick}/>
      </ul>
    </div>
  );
};

export default NominatedMoviesList;
