import React from "react";
import { Link } from "react-router-dom";


export default function Done() {
  return (
    <>
      <main className="flex flex-col items-center justify-between h-dvh text-xl md:text-2xl  w-full  bg-bgWhite  shadow-lg  px-10 py-5 text-brown  ">
        <div className="w-full p-1 border-b-2  border-black flex justify-center">
          <Link
            to={".."}
            relative="path"
            className="text-md md:text-lg px-3 font-normal hover:text-babyBlue ease-out duration-500"
          >
            Go to Home
          </Link>
        </div>
        <div className="w-full p-1 flex flex-col justify-center gap-2 text-center  ">
          <p className="font-semibold text-md md:text-xl pb-5 ">
            Order placed successfully! A confirmation email has been sent to
            your inbox.
          </p>
          <p className="font-semibold text-md md:text-xl border-t-2 pt-5  border-black ">
            Have a good day{" "}
          </p>
        </div>
        <div className="flex flex-col border-t-2   border-black w-full ">
          <div className="w-full p-1   border-black flex justify-center py-3">
            <p className="font-bold text-md md:text-lg  ">Thank you</p>
          </div>
        </div>
      </main>
    </>
  );
}
