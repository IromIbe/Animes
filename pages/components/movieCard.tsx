/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IMoviesProps } from "./moviePg";
import Link from "next/link";

function MovieCard({ movie }: { movie: IMoviesProps }) {
  const { id, title, overview, poster_path, vote_average } = movie;
  return (
    <Link href={`/movie/${movie.id}`}>
      <div
        className='movie relative rounded-lg w-64 bg-[#fff] flex justify-center items-center flex-col mx-3 my-3'
        style={{ boxShadow: "3px 3px 5px rgb(0 0 0 / 10%)" }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
          alt='movie poster'
          className='max-w-[95%] h-[inherit['
        />
        <div className='info w-full bg-[#0e111d] px-3 py-6 flex justify-between items-center'>
          <p className='text-white'>{title}</p>
          <span
            className={`${
              vote_average < 7
                ? "text-red-500"
                : vote_average === 7
                ? "text-yellow-500"
                : vote_average > 7
                ? "text-green-500"
                : ""
            } bg-black w-10 h-10 rounded-full flex justify-center items-center`}
          >
            {vote_average}
          </span>
        </div>
        <div className='overview bg-[rgba(0,0,0,0.87)] rounded-lg  p-[1rem]'>
          <h1 className='text-2xl text-white font-medium mb-4'>OverView</h1>
          <p className='text-white leading-6  text-sm leading-[20px]'>
            {overview}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
