import MovieCard from "./MovieCard";

function ContentTable({ content }) {
  return (
    <div className="flex flex-wrap mx-9 gap-6 mt-4 justify-center bg-black">
      {content?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default ContentTable;
