/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import React, { useContext } from "react";
import ContentTable from "./ContentTable";
import { MovieContext } from "../helpers/MovieContext";

import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Main() {
  const context = useContext(MovieContext);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    context.setActiveTab(newValue);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Tabs
        value={context.activeTab}
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
              fontWeight: "bold",
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
            },
          }}
          label="Favorites"
        />
      </Tabs>
      {context.activeTab === 0 && (
        <ContentTable content={context.searchResults} />
      )}
      {context.activeTab === 1 && <ContentTable content={context.watched} />}
      {context.activeTab === 2 && <ContentTable content={context.favorites} />}
    </ThemeProvider>
  );
}

export default Main;
