import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import useFetch from "../helpers/useFetch";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useState, useEffect, useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { MovieContext } from "../helpers/MovieContext";

export default function MovieCard({ movie }) {
  const context = useContext(MovieContext);
  // const { get } = useFetch("https://www.omdbapi.com/?i=");
  const [details, setDetails] = useState(null);

  const isFavorite = (movie) => {
    return context.favorites?.some((content) => content.id === movie.id);
  };

  const isWatched = (movie) => {
    return context.watched?.some((con) => con.id === movie.id);
  };

  // useEffect(() => {
  //   get(movie.imdbID).then((data) => setDetails(data));
  // }, [movie.imdbID]);

  const handleAddFavorite = useCallback(
    (e) => {
      e.preventDefault();
      context.setFavorites((prev) => [...prev, movie]);
      console.log("Added to favorites");
    },
    [context, movie]
  );

  //function to handle delete favorite
  const handleDeleteFavorite = useCallback(
    (e) => {
      e.preventDefault();
      context.setFavorites((prev) => prev.filter((con) => con.id !== movie.id));
      console.log("Deleted from favorites");
    },
    [context, movie]
  );
  const handleAddWatched = useCallback(
    (e) => {
      e.preventDefault();

      context.setWatched((prev) => [...prev, movie]);
      console.log("Added to watched");
    },
    [context, movie]
  );

  const handleDeleteWatched = useCallback(
    (e) => {
      e.preventDefault();
      context.setWatched((prev) =>
        prev.filter((con) => con.imdbID !== movie.imdbID)
      );
      console.log("Deleted from watched");
    },
    [context, movie]
  );

  return (
    <div className="font-mono">
      <Card
        sx={{
          maxWidth: 290,
          margin: "0 auto",
          padding: "0.1em",
          height: "100%", // Set a fixed height for the card
          display: "flex",
          flexDirection: "column", // Stack elements vertically
          fontFamily: "mono",
        }}
        key={movie.id}
      >
        <CardHeader
          title={`${movie.title ? movie.title : movie.name} `}
          // (${movie.release_date})
          subheader={movie?.release_date}
        />
        <CardMedia
          component="img"
          loading="lazy"
          height="250" // Set a consistent height for the image
          image={
            movie.poster_path !== "N/A"
              ? "https://image.tmdb.org/t/p/original" + movie.poster_path
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
          }
          alt={movie.title}
          sx={{
            padding: "1em 1em 0 1em",
            objectFit: "contain",
            flexGrow: 1, // Expand to fill available space
          }}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            noWrap // Limit the text to a single line
          >
            {/* {details?.Genre} */}
          </Typography>
        </CardContent>

        <Grid container spacing={2}>
          <Grid item xs={1.5}>
            {!isFavorite(movie) ? (
              <IconButton onClick={handleAddFavorite}>
                <FavoriteIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleDeleteFavorite}>
                <RemoveCircleIcon />
              </IconButton>
            )}
          </Grid>

          <Grid item xs={2}>
            {!isWatched(movie) ? (
              <IconButton onClick={handleAddWatched}>
                <RemoveRedEyeIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleDeleteWatched}>
                <VisibilityOffIcon />
              </IconButton>
            )}
          </Grid>
          <Grid item xs={5.5}></Grid>
          <Grid item xs={2}>
            {/* {details?.Ratings?.at(0)?.Value ?? "N/A"} */}
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
