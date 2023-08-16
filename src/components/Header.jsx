import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { MovieContext } from "../helpers/MovieContext";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";

function Header({ disabledInput }) {
  const matches = useMediaQuery("(min-width:820px)");
  const context = useContext(MovieContext);

  // useEffect(() => {
  //   if (context.searchQuery !== "") {
  //     context.handleSearch(context.searchQuery);
  //   }
  // }, [context.searchQuery, context.handleSearch]);

  function handleChange(e) {
    context.setSearchQuery(e.target.value);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
          value={context.searchQuery}
          onChange={handleChange}
          disabled={disabledInput}
        />
      </div>
      <div className="my-5">
        {!matches && (
          <>
            <IconButton
              size="large"
              aria-label="open menu"
              onClick={handleMenuClick}
              style={{ color: "white" }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/browse">Browse</NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/watched">Watched</NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/favorite">Favorite</NavLink>
              </MenuItem>
            </Menu>
          </>
        )}
      </div>
      {matches && (
        <div className="text-white p-6 gap-7">
          <Button
            sx={{
              color: "red",
              "& .active": {
                color: "white",
              },
            }}
          >
            <NavLink
              className="text-red gap-11"
              to="/"
              activeClassName="active"
            >
              Browse
            </NavLink>
          </Button>
          <Button
            sx={{
              color: "red",
              "& .active": {
                color: "white",
              },
            }}
          >
            <NavLink
              className="text-red gap-11"
              to="/watched"
              activeClassName="active"
            >
              Watched
            </NavLink>
          </Button>
          <Button
            sx={{
              color: "red",
              "& .active": {
                color: "white",
              },
            }}
          >
            <NavLink
              className="text-red"
              to="/favorite"
              activeClassName="active"
            >
              Favorite
            </NavLink>
          </Button>
        </div>
      )}
    </header>
  );
}

export default Header;
