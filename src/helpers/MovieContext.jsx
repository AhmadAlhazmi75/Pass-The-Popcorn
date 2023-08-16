import React, { createContext, useState, useEffect } from "react";
import useFetch from "./useFetch";
const MovieContext = createContext();

function MovieProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]); // State to hold results from search
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const { get, loading } = useFetch("https://www.omdbapi.com/?s=");

  const handleSearch = (searchQuery) => {
    if (searchQuery === "") return;
    get(searchQuery).then((data) => setSearchResults(data.Search));
  };

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
        activeTab,
        setActiveTab,
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
