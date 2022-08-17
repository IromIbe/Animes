import * as React from 'react';
import Link from 'next/link';
export interface ILogoProps {
}

function Logo (props: ILogoProps) {
  return (
    <div className='w-full h-7'>
        <Link href="/">
      <h1 className='text-[#ffffff] cursor-pointer text-4xl  font-bold tracking-wide italic'>M-<span className='not-italic'>Zone</span></h1>

        </Link>
    </div>
  );
}
export default Logo;