/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { useContext } from "react";
import { IMoviesProps } from "./moviePg";
import { WatchCartContext } from "../../context/WatchCartContext";
export interface IMovieIdProps extends IMoviesProps {
  runtime: number;
  genres: { name: string; id: number }[];
  popularity: number;
  release_date: number;
  tagline: string;
}

function MovieId({ movieInfo }: { movieInfo: IMovieIdProps }) {
  const {
    runtime,
    genres,
    release_date,
    id,
    title,
    overview,
    poster_path,
    vote_average,
    tagline,
  } = movieInfo;
  const { setCart, cart } = useContext(WatchCartContext);

  const addToWatchList = (id: number) => {
    const existingCartItem = cart.find(
      (cartItem: IMovieIdProps) => cartItem.id === id
    );
    if (existingCartItem) {
      return alert("already in watchlist");
    }
    return setCart([...cart, movieInfo]);
  };

  return (
    <div
      className='min-h-screen bg-center bg-no-repeat object-cover'
      style={{
        background: `url(https://image.tmdb.org/t/p/w1280/${poster_path})`,
      }}
    >
      <div className='info flex flex-col md:flex-row justify-start md:justify-center m-[auto] pt-14 md:w-[70%] w-full'>
        {poster_path && (
          <div className='poster sm:w-[50%] w-[70%] md:w-[100%] flex justify-center items-center m-[auto] '>
            <img
              src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
              alt={title}
              className='w-full h-full'
            />
          </div>
        )}
        <div className='details  w-full sm:px-6 px-3 flex flex-col bg-[rgba(0,0,0,0.8)] dark:bg-[rgba(0,0,0,0.93)]'>
          <h1 className='sm:text-5xl text-3xl my-5 leading-[40px] text-[#00800090] font-bold'>
            {title}
          </h1>
          <p className=' text-[#00800090] font-medium mb-1   text-xl leading-[20px]'>
            {tagline}...
          </p>
          <p className=' text-[rgb(255,255,255)] font-normal mb-7  text-[15px] leading-[25px]'>
            {overview}
          </p>
          <div className='watch flex justify-start items-center'>
            <button
              className='bg-[#00800090] hover:bg-[#00800070] text-white text-sm px-4 py-2 rounded-lg mb-2'
              onClick={() => addToWatchList(id)}
            >
              Watch Later
            </button>
          </div>
          <hr />
          <div className='further-details flex flex-col mt-4'>
            <div className='genre-rating flex flex-col sm:flex-row justify-between item-start'>
              <div className='genre py-2'>
                <span className='text-2xl text-white'>Genre</span>
                <div className='flex justify-between flex-1 items-center'>
                  {genres.map((genre) => (
                    <p
                      key={genre.id}
                      className='mr-5 font-medium text-base text-[#00800090]'
                    >
                      {genre.name}
                    </p>
                  ))}
                </div>
              </div>
              <div className='rating py-2'>
                <h6 className='text-2xl text-white'>Rating</h6>
                <span className='text-[#00800090] text-base font-medium'>
                  {vote_average}
                </span>
              </div>
            </div>
            <div className='release_runtime mt-3 sm:mt-8 flex justify-between sm:items-center flex-col sm:flex-row'>
              <div className='release py-2'>
                <h6 className='text-2xl text-white'>Original Release</h6>
                <p className='text-[#00800090] text-base font-medium'>
                  {release_date}
                </p>
              </div>
              <div className='runtime py-2'>
                <h6 className='text-2xl text-white'>Runtime</h6>
                <p className='text-[#00800090] text-base font-medium'>
                  {runtime}m
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieId;
