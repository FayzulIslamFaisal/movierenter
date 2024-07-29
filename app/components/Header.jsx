"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import CartDetails from "./movie/CartDetails";
import { MovieContext, ThemeContext } from "../context";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  // const { state.cartData } = useContext(MovieContext);
  const { state } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleCartShow = () => {
    setShowCart(true);
  };
  return (
    <header>
      {showCart && (
        <CartDetails
          onclose={() => {
            setShowCart(false);
          }}
        />
      )}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Link href="/">
          <Image src="./assets/logo.svg" width="139" height="26" alt="" />
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="./assets/ring.svg" width="24" height="24" alt="" />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image
                src={
                  darkMode
                    ? "./assets/icons/sun.svg"
                    : "./assets/icons/moon.svg"
                }
                width="24"
                height="24"
                alt="hello"
                onClick={() => setDarkMode((darkMode) => !darkMode)}
              />
            </Link>
          </li>
          <li>
            <Link
              onClick={handleCartShow}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image
                src="./assets/shopping-cart.svg"
                width="24"
                height="24"
                alt="hello"
              />
              {state.cartData.length > 0 && (
                <span>{state.cartData.length}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
