import React, { useState } from "react";
import "../globals.css";
import Image from "next/image";
import oscars from "../../public/images/oscars.jpg";

const WinnerMovieButton = ({ handleWinnerMovie }) => {
  return (
    <main>
      <ul className="w-11/12 p-3 flex flex-col items-center justify-center ">
        <li className="flex flex-col items-center justify-center md:max-w-xl ">
          <div className="flex flex-col justify-center  pt-4 px-1 my-4 leading-normal text-[#c79f27] ">
            <h2 className="mb-2 font-bold tracing-tight text-center text-3xl">
              Great Movie Choices!
            </h2>
            <p className="text-2xl text-center my-4">
              You have reached the 5 film limit. Remove any film to select a new
              one.
            </p>
          </div>

          <button
            className=" flex items-center justify-center p-0.5 m-4 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br  from-black to-[#c79f27] group-hover:from-black group-hover:to-[#daab20] hover:text-white"
            onClick={handleWinnerMovie}
          >
            <span className="w-full relative px-6 py-2 text-[#f8e19d] rounded-md text-base uppercase" >
              Reveal Winner!
            </span>
          </button>
        </li>
      </ul>
    </main>
  );
};

export default WinnerMovieButton;
