import React from "react";
import Image from "next/image";

const WinnerMovieReveal = ({ nominatedMovies, onRestart }) => {
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }
  const shuffledImages = shuffleArray(nominatedMovies);
  const winnerMovie = shuffledImages[2];

  return (
    <section className="flex flex-col items-center justify-center rounded-lg text-xs md:text-sm h-screen gap-6">
      <h2 className="text-[#c79f27] text-6xl">And the Oscar goes to...</h2>
      <div className="image-gallery">
        <Image
          src={shuffledImages[0].Poster}
          alt="Image 1"
          width={200}
          height={300}
          className="image-item first"
        />{" "}
        <Image
          src={shuffledImages[1].Poster}
          alt="Image 2"
          width={200}
          height={300}
          className="image-item second"
        />{" "}
        <Image
          src={shuffledImages[2].Poster}
          alt="Image 3"
          width={200}
          height={300}
          className="image-item middle"
        />{" "}
        <Image
          src={shuffledImages[3].Poster}
          alt="Image 4"
          width={200}
          height={300}
          className="image-item forth"
        />{" "}
        <Image
          src={shuffledImages[4].Poster}
          alt="Image 5"
          width={200}
          height={300}
          className="image-item fifth"
        />{" "}
      </div>
      {/* <div className="object-cover w-full flex items-center justify-center rounded-t-lg md:h-auto md:w-48">
            <Image
              className="md:rounded-l-lg"
              src={winnerMovie.Poster}
              alt="movie poster"
              width={200}
              height={300}
            />
          </div> */}
      <div className="flex flex-col justify-between md:pl-4 pt-4 px-1 leading-normal text-[#c79f27]">
        <h3 className="mt-0 font-bold tracing-tight text-center md:text-left text-3xl">
          {winnerMovie.Title}
        </h3>
      </div>
      <div className="flex items-center justify-center">
        <button
          className=" flex items-center justify-center p-0.5 m-4 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-black to-[#c79f27] group-hover:from-black group-hover:to-[#daab20] hover:text-white"
          onClick={onRestart}
        >
          <span className="w-full relative px-6 py-2 text-[#f8e19d] rounded-md text-base uppercase ">
            Restart
          </span>
        </button>
      </div>
    </section>
  );
};

export default WinnerMovieReveal;
