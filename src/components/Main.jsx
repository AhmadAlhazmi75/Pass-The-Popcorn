/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import React from "react";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import ContentTable from "./ContentTable";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function Main({ loading, searchResults, activeTab, setActiveTab }) {
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

  // State to hold favorites
  const handleChange = (event, newValue) => {
    event.preventDefault();
    setActiveTab(newValue);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        TabIndicatorProps={{ style: { background: "white" } }}
        sx={{
          ".Mui-selected": {
            color: "red",
          },
        }}
        centered
      >
        <Tab
          sx={{
            color: "red",
            fontWeight: "medium",
            "&.Mui-selected": {
              color: "white",
              fontWeight: "bold", // Set the text color to red for the selected tab
            },
          }}
          label="Search Results"
        />
        <Tab
          sx={{
            color: "red",
            fontWeight: "medium",
            "&.Mui-selected": {
              color: "white",
              fontWeight: "bold",
              // Set the text color to red for the selected tab
            },
          }}
          label="Watched Movies"
        />
        <Tab
          sx={{
            color: "red",
            fontWeight: "medium",
            "&.Mui-selected": {
              color: "white",
              fontWeight: "bold",
              // Set the text color to red for the selected tab
            },
          }}
          label="Favorites"
        />
      </Tabs>
      {activeTab === 0 && (
        <ContentTable
          content={searchResults}
          favorites={favorites}
          setFavorites={setFavorites}
          watched={watched}
          setWatched={setWatched}
        />
      )}
      {activeTab === 1 && (
        <ContentTable
          content={watched}
          watched={watched}
          setWatched={setWatched}
          setFavorites={setFavorites}
          favorites={favorites}
        />
      )}
      {activeTab === 2 && (
        <ContentTable
          content={favorites}
          favorites={favorites}
          setFavorites={setFavorites}
          setWatched={setWatched}
          watched={watched}
        />
      )}
    </ThemeProvider>
  );
}

export default Main;
