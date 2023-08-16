import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Watched from "./components/Watched";
import Favorites from "./components/Favorites";
import BrowsePage from "./components/BrowsePage";
// import ApiTest from "./components/ApiTest";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BrowsePage />} />
        <Route path="watched" element={<Watched />} />
        <Route path="favorite" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}
