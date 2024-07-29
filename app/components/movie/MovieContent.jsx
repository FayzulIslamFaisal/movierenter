import { getAllMovies } from "@/app/data/Movies";
import MovieCard from "./MovieCard";

const MovieContent = () => {
  const movies = getAllMovies();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((item) => {
          return <MovieCard key={item.id} movieItem={item} />;
        })}
      </div>
    </div>
  );
};

export default MovieContent;
