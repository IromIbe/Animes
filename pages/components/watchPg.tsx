/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect } from "react";
import { WatchCartContext } from "../../context/WatchCartContext";
import { IMovieIdProps } from "./movieId";
import axios from "axios";

type Props = {};

function WatchPg({}: Props) {
  const { cart, setCart } = useContext(WatchCartContext);

  const removeFromList = (id: number): any => {
    const filterItem = cart.filter((item: any) => item.id !== id);
    setCart(filterItem);
  };

  return (
    <div className='md:px-20 px-4 pb-8'>
      {cart.length === 0 && (
        <div className='flex justify-center items-center min-h-screen'>
          <h1 className='sm:text-3xl text-3xl'>
            No Items In Your WatchList! Click on Individual Movies To Add Items.
          </h1>
        </div>
      )}
      {cart.map((item: IMovieIdProps) => (
        <div key={item.id}>
          <div className='px-4 flex flex-col sm:flex-row justify-between items-center w-full my-10 border-2 dark:border-[white] border-[#00000080]'>
            <div>
              <h5 className='text-2xl py-3 font-medium'>{item.title}</h5>
              <img
                src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`}
                alt=''
                className='w-[200px]'
              />
            </div>
            <div className='btms mx-10 sm:my-0 m-2 flex  justify-between flex-[.3]'>
              <button className='dark:bg-[#00800090] bg-[#008000] dark:hover:bg-[#00800070] text-white text-sm px-4 py-2 rounded-lg sm:mx-0 mx-1'>
                Watched
              </button>
              <button
                className=' bg-[red] hover:bg-[#ff000090]  text-white text-sm px-4 py-2 rounded-lg sm:mx-0 mx-1'
                onClick={() => removeFromList(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WatchPg;
