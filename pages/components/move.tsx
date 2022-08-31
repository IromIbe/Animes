import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

type Props = {
  direction: string;
  setPage: any;
  page: number;
};

function Move({ direction, setPage, page }: Props) {
  const moveNext = () => {
    setPage((prev: any) => prev + 1);
  };
  const moveBack = () => {

    setPage((prev: any) => prev - 1);
  };
  return (
    <div
      onClick={() => (direction === "forward" ? moveNext() : moveBack())}
      className='bg-black text-white text-5xl font-bold mx-5 rounded-lg flex justify-center items-center hover:bg-[#00800090]'
    >
      {direction === "forward" ? (
        <IoIosArrowForward />
      ) : direction === "backward" ? (
        page > 1 && <IoIosArrowBack />
      ) : null}
    </div>
  );
}

export default Move;
