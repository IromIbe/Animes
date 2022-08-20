import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

type Props = {
  direction: string;
  //   func: () => void;
};

function Move({ direction }: Props) {
  return (
    <div
      //   onClick={() => func()}
      className='bg-black text-white text-5xl font-bold mx-5 rounded-lg flex justify-center items-center hover:bg-[#00800090]'
    >
      {direction === "forward" ? (
        <IoIosArrowForward />
      ) : direction === "backward" ? (
        <IoIosArrowBack />
      ) : null}
    </div>
  );
}

export default Move;
