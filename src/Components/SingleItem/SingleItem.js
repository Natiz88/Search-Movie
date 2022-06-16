import Movies from "./../Movies/List.json";
import "./SingleItem.css";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const SingleItem = () => {
  const { id } = useParams();
  const findMovie = Movies.find((movie) => movie.id === parseInt(id));

  return (
    <>
      <Navbar />
      <div className="SingleItem">
        <div className="SingleItem__movie">
          <img
            src={findMovie.posterUrl}
            alt={findMovie.title}
            className="image"
          />
          <div className="details">
            <h1>{findMovie.title}</h1>
            <p>Released: {findMovie.year}</p>
            <p>Genre: {findMovie.genres}</p>
            <p>Runtime: {findMovie.runtime} minutes</p>
            <p>Actors: {findMovie.actors}</p>
            <p>Director: {findMovie.director}</p>
            <p>Plot: {findMovie.plot}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleItem;
