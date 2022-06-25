import MoviesList from "./List.json";
import "./Movies.css";
import FilteredMovie from "./FilteredMovie";
import Pagination from "./../Pagination/Pagination";
import { useState } from "react";

const Movies = ({ value, year, genre }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const total_posts = MoviesList.length;
  const post_per_page = 12;
  const total_pages = total_posts / post_per_page;
  const indexOfLastPost = currentPage * post_per_page;
  const indexOfFirstPost = indexOfLastPost - post_per_page;
  const currentPosts = MoviesList.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (num) => setCurrentPage(num);

  function filter(year, genre) {
    if (year === "" && genre === "") {
      return currentPosts
        .filter((movie) => movie.title.toLowerCase().includes(value))
        .map((movie) => <FilteredMovie movie={movie} />);
    } else if (genre === "") {
      return MoviesList.filter(
        (movie) =>
          movie.title.toLowerCase().includes(value) && movie.year === year
      ).map((movie) => <FilteredMovie movie={movie} />);
    } else if (year === "") {
      return currentPosts
        .filter(
          (movie) =>
            movie.title.toLowerCase().includes(value) &&
            movie.genres.includes(genre)
        )
        .map((movie) => <FilteredMovie movie={movie} />);
    } else {
      return currentPosts
        .filter(
          (movie) =>
            movie.title.toLowerCase().includes(value) &&
            movie.year === year &&
            movie.genres.includes(genre)
        )
        .map((movie) => <FilteredMovie movie={movie} />);
    }
  }
  return (
    <div className="container">
      <div className="Movies">{filter(year, genre)}</div>
      <Pagination paginate={paginate} total_pages={total_pages} />
    </div>
  );
};
export default Movies;
