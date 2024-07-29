"use client";
import Image from "next/image";
import Rating from "./Rating";
import { useContext, useState } from "react";
import MovieDetailsModal from "./MovieDetailsModal";
import Link from "next/link";
import { MovieContext } from "@/app/context";
import { toast } from "react-toastify";

const MovieCard = ({ movieItem }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  // const { cartData, setCartData } = useContext(MovieContext);
  const { state, dispatch } = useContext(MovieContext);

  const handleClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };
  const handleMovieSelection = (movieItem) => {
    setSelectedMovie(movieItem);
    setShowModal(true);
  };
  const handkeAddToCart = (e, movie) => {
    e.stopPropagation();
    const found = state.cartData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      // setCartData([...cartData, movie]);
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
      toast.success(`Movi ${movie.title}  Added successfully`, {
        position: "top-right",
      });
    } else {
      toast.error(`Movi ${movie.title} hasbeen added to the cart already`, {
        position: "top-right",
      });
    }
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movieItem={selectedMovie}
          onClose={handleClose}
          onCartAdd={handkeAddToCart}
        />
      )}

      <div className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl h-full">
        <Link href="#" onClick={() => handleMovieSelection(movieItem)}>
          <div className="relative w-full h-[200px] ">
            <Image
              fill
              className="object-cover "
              src={movieItem.cover}
              alt={movieItem.title}
            />
          </div>

          <div className="pt-4">
            <h3 className="text-xl mb-1">{movieItem.title} </h3>
            <p className="text-[#575A6E] text-sm mb-2">{movieItem.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movieItem.rating} key={movieItem.id} />
            </div>
            <button
              onClick={(e) => handkeAddToCart(e, movieItem)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            >
              <Image src="/assets/tag.svg" width={10} height={10} alt="hello" />
              <span>${movieItem.price} | Add to Cart</span>
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
