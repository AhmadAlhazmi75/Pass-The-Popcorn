import MovieCard from "./MovieCard";

function ContentTable({
  content,
  setFavorites,
  favorites,
  watched,
  setWatched,
}) {
  return (
    <div className="flex flex-wrap mx-9 gap-6 mt-4 justify-center bg-black">
      {content?.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          favorites={favorites}
          setFavorites={setFavorites}
          watched={watched}
          setWatched={setWatched}
        />
      ))}
    </div>
  );
}

export default ContentTable;
