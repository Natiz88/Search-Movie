import { Link } from "react-router-dom";
import "./Movies.css";

const FilteredMovie = ({ movie }) => {
  return (
    <div className="movie">
      <Link to={`/SingleItem/${movie.id}`}>
        <img alt="img" src={movie.posterUrl} />
        <h3>
          {movie.title}({movie.year})
        </h3>
      </Link>
    </div>
  );
};
export default FilteredMovie;
