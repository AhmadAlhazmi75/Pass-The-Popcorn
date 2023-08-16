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

function Main({ content }) {
  // const context = useContext(MovieContext);

  return (
    <ThemeProvider theme={darkTheme}>
      <ContentTable content={content} />
    </ThemeProvider>
  );
}

export default Main;
