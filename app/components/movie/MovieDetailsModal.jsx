import Image from "next/image";
import React from "react";

const MovieDetailsModal = ({ onClose, movieItem, onCartAdd }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden flex">
          <div className=" relative w-full min-h-[500px] flex-1">
            <Image
              fill
              src={movieItem.cover}
              alt={movieItem.title}
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="p-5 lg:p-11 flex-1">
            <div className="">
              <h2 className="text-3xl lg:text-[50px] mb-2 font-bold">
                {movieItem.title}
              </h2>
              <span className="block text-base text-[#9fa0a4] dark:text-[#575A6E] my-3">
                {movieItem.genre}
              </span>
              <div></div>
            </div>
            <p className="text-sm lg:text-base mb-8 lg:mb-16">
              {movieItem.description}
            </p>
            <div className="grid lg:grid-cols-2 gap-2">
              <button
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                onClick={(e) => onCartAdd(e, movieItem)}
              >
                <Image
                  src="./assets/tag.svg"
                  alt="star"
                  width={10}
                  height={10}
                />
                <span>${movieItem.price} | Add to Cart</span>
              </button>
              <button
                className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
