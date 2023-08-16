import React, { createContext, useState, useEffect } from "react";
import useFetch from "./useFetch";
const MovieContext = createContext();

function MovieProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const { get, loading } = useFetch("https://api.themoviedb.org/3/");
  const [searchResults, setSearchResults] = useState([]); // Initialize with an empty array

  const handleSearch = async (searchQuery) => {
    if (searchQuery === "") {
      // If search query is empty, fetch popular movies
      const popularData = await get(
        "movie/popular?api_key=22b766fd305a80b9d474ac2f1eb7aa83"
      );
      setSearchResults(popularData.results);
    } else {
      // Fetch search results based on searchQuery
      // const searchData = await get(
      //   `search/keyword?query=${searchQuery}&api_key=22b766fd305a80b9d474ac2f1eb7aa83&page=1`
      // );
      const results = await get(
        `search/multi?query=${searchQuery}&include_adult=true&language=en-US&page=1&api_key=22b766fd305a80b9d474ac2f1eb7aa83&page=1`
      );
      setSearchResults(results.results);
      console.log(results.results);
    }
  };

  useEffect(() => {
    // Fetch popular movies initially
    get("movie/popular?api_key=22b766fd305a80b9d474ac2f1eb7aa83").then(
      (data) => {
        setSearchResults(data.results);
        console.log(data);
      }
    );
  }, []); // Empty dependency array to run only once

  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const [watched, setWatched] = useState(() => {
    const storedWatched = localStorage.getItem("watched");
    return storedWatched ? JSON.parse(storedWatched) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  return (
    <MovieContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
        handleSearch,
        watched,
        setWatched,
        favorites,
        setFavorites,
        loading,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
export { MovieContext, MovieProvider };
