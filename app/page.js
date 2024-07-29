"use client";
import { useReducer, useState } from "react";
import ContentWrapper from "./components/ContentWrapper";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { MovieContext, ThemeContext } from "./context";
import { cartReducer, initialState } from "./reducers/CartReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  // const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          {/* <MovieContext.Provider value={{ cartData, setCartData }}> */}
          <div className={darkMode ? "dark" : ""}>
            <Header />
            <ContentWrapper />
            <Footer />
            <ToastContainer />
          </div>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
