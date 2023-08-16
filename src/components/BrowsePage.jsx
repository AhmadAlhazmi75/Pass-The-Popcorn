import Main from "./Main";
import { useContext, useEffect } from "react";
import { MovieContext } from "../helpers/MovieContext";
import Header from "./Header";
function BrowsePage() {
  const context = useContext(MovieContext);

  useEffect(() => {
    // Call handleSearch directly when the searchQuery changes
    context.handleSearch(context.searchQuery);
  }, [context.searchQuery]);

  return (
    <>
      <Header />
      <Main content={context.searchResults} />
    </>
  );
}

export default BrowsePage;
