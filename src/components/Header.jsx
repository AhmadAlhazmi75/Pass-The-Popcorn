/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import React, { useEffect, useContext } from "react";
import { MovieContext } from "../helpers/MovieContext";
// Import useState

function Header() {
  const context = useContext(MovieContext); // Import handleSearch function from MovieContext
  // State to hold the search query
  useEffect(() => {
    if (context.searchQuery !== "") {
      context.handleSearch(context.searchQuery);
    }
  }, [context.searchQuery, context.handleSearch, context]);

  function handleChange(e) {
    context.setSearchQuery(e.target.value);
  }

  return (
    <header className="flex items-center justify-center px-4 py-4 bg-black md:px-8">
      <img
        className="h-16 md:h-24"
        src="https://i.ibb.co/TbCFSBh/illustration-graphic-of-popcorn-logo-free-vector-removebg-preview.png"
        alt="logo"
      />
      <div className="flex items-center justify-center flex-1 max-w-xl">
        <input
          id="searchInput"
          name="searchInput"
          className="w-full px-2 py-2 text-black bg-white rounded md:px-4"
          type="text"
          placeholder="Search"
          value={context.searchQuery} // Bind input value to the searchQuery state
          onChange={handleChange} // Update searchQuery state on input change
          disabled={context.activeTab !== 0} // Disable input when on Watched Movies tab
        />
      </div>
    </header>
  );
}

export default Header;
