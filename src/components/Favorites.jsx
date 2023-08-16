import Main from "./Main";
import { useContext } from "react";
import { MovieContext } from "../helpers/MovieContext";
import Header from "./Header";
function Favorites() {
  const context = useContext(MovieContext);
  return (
    <>
      <Header disabledInput />
      <Main content={context.favorites} />
    </>
  );
}

export default Favorites;
