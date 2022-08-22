import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

type Props = {
  direction: string;
  setPage: (page: number) => void;
  page: number;
};

function Move({ direction, setPage, page }: Props) {
  console.log(page, "pagw");

  const moveNext = () => {
    console.log("next");

    setPage((prev) => prev + 1);
  };
  const moveBack = () => {
    console.log("back");

    setPage((prev) => prev - 1);
  };
  return (
    <div
      onClick={() => (direction === "forward" ? moveNext() : moveBack())}
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
