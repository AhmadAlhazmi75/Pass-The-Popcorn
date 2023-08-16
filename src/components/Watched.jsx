import Main from "./Main";
import { useContext } from "react";
import { MovieContext } from "../helpers/MovieContext";
import Header from "./Header";
function Watched() {
  const context = useContext(MovieContext);
  return (
    <>
      <Header disabledInput />
      <Main content={context.watched} />;
    </>
  );
}

export default Watched;
