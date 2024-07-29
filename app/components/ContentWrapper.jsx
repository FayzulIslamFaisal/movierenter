import React from "react";
import SideBar from "./SideBar";
import MovieContent from "./movie/MovieContent";

const ContentWrapper = () => {
  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar />
        <MovieContent />
      </div>
    </main>
  );
};

export default ContentWrapper;
