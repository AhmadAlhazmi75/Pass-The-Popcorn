import { useState, useContext } from "react";
import useFetch from "./helpers/useFetch";
import Header from "./components/Header";
import Main from "./components/Main";
import { MovieContext } from "./helpers/MovieContext";
export default function App() {
  const context = useContext(MovieContext);
  // const [searchResults, setSearchResults] = useState([]); // State to hold results from search
  // const [searchQuery, setSearchQuery] = useState("");
  // const [activeTab, setActiveTab] = useState(0);
  //search with s and t

  return (
    <div>
      <Header
      // activeTab={activeTab}
      // handleSearch={handleSearch}
      // searchQuery={searchQuery}
      // setSearchQuery={setSearchQuery}
      />
      <Main
      // searchResults={searchResults}
      // activeTab={activeTab}
      // setActiveTab={setActiveTab}
      // loading={loading}
      />
    </div>
  );
}
