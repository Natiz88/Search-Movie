import MoviesList from "./List.json";
import "./Movies.css";
import FilteredMovie from "./FilteredMovie";

const Movies = ({ value, year, genre }) => {
  function filter(year, genre) {
    if (year === "" && genre === "") {
      return MoviesList.filter((movie) =>
        movie.title.toLowerCase().includes(value)
      ).map((movie) => <FilteredMovie movie={movie} />);
    } else if (genre === "") {
      return MoviesList.filter(
        (movie) =>
          movie.title.toLowerCase().includes(value) && movie.year === year
      ).map((movie) => <FilteredMovie movie={movie} />);
    } else if (year === "") {
      return MoviesList.filter(
        (movie) =>
          movie.title.toLowerCase().includes(value) &&
          movie.genres.includes(genre)
      ).map((movie) => <FilteredMovie movie={movie} />);
    } else {
      return MoviesList.filter(
        (movie) =>
          movie.title.toLowerCase().includes(value) &&
          movie.year === year &&
          movie.genres.includes(genre)
      ).map((movie) => <FilteredMovie movie={movie} />);
    }
  }
  return (
    <>
      <div className="container">
        <div className="Movies">{filter(year, genre)}</div>
      </div>
    </>
  );
};
export default Movies;
