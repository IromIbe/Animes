import * as React from 'react';
import Link from 'next/link';
import { Logo } from '../logo';

export interface IAppProps {
}

export function HomePage (props: IAppProps) {
  return (
    <div style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(cinema.svg)"}} className="relative w-full h-[100%] md:h-[100vh] md:bg-center bg-left bg-no-repeat bg-origin-border" >
             <div className="logo absolute top-0 left-0 md:p-7 pt-4 px-2 mb-7">
        <Logo />
    </div>
<div className='flex  flex-col justify-center items-center min-h-screen text-[white] '>
<h1 className='sm:text-5xl text-3xl sm:p-0 px-3 md:leading-[70px] leading-[45px] mt-14 font-medium capitalize italic tracking-normal'>Check out The Best Movies Available <br /> With just a single click!</h1>
<div className="btns flex  justify-between items-center mt-6">
    <Link href="/movies">
        <button  className='px-4 py-2 border-2 rounded-[20px] my-3 mx-3 hover:bg-[#00800020]'>See All Movies</button>
    </Link>
    <Link href=""><button className='px-4 py-2 border-2 rounded-[20px] my-3 mx-3 hover:bg-[#00800020]'>View Watchlist</button></Link>
</div>
</div>

    </div>
  );
}
