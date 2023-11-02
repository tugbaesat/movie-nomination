import React, { useState } from "react";
import "../globals.css";
import WinnerMovieReveal from "./WinnerMovieReveal";
import Link from "next/link";


const WinnerMovieButton = ({handleWinnerMovie}) => {

  return (
    <main>
        <ul className="w-11/12 p-3">
          <li className="flex flex-col  items-center justify-between m-4 bg-white bg-opacity-70 rounded-lg shadow md:max-w-xl text-xs md:text-sm hover:bg-gray-100">
            <div className="flex flex-col justify-between  pt-4 px-1 my-4 leading-normal text-[#675621] ">
              <h2 className="mb-2 font-bold tracing-tight text-center">
                Great Movie Choices!
              </h2>
              <p>
                You have reached the 5 film limit. Remove any film to select a
                new one.
              </p>
            </div>
            <button
              className=" flex items-center justify-center p-0.5 m-4 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br  from-black to-[#c79f27] group-hover:from-black group-hover:to-[#daab20] hover:text-white"
              onClick={handleWinnerMovie}
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-200 bg-opacity-0 text-gray-100 rounded-md">
                Reveal Winner!
              </span>
            </button>
          </li>
        </ul>
    </main>
  );
};

export default WinnerMovieButton;
