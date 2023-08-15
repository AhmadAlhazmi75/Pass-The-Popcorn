import { useState } from "react";
import useFetch from "./helpers/useFetch";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const [searchResults, setSearchResults] = useState([]); // State to hold results from search
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const { get, loading } = useFetch("https://www.omdbapi.com/?s="); //search with s and t

  const handleSearch = (searchQuery) => {
    if (searchQuery === "") return;
    get(searchQuery).then((data) => setSearchResults(data.Search));
  };

  return (
    <div>
      <Header
        activeTab={activeTab}
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Main
        searchResults={searchResults}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        loading={loading}
      />
    </div>
  );
}
