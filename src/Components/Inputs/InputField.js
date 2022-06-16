import { useState } from "react";
import Movies from "./../Movies/Movies";
import "./InputField.css";
import { FaFilter } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

const InputField = () => {
  const [value, setValue] = useState("");
  const [valueYear, setValueYear] = useState("");
  const [valueGenre, setValueGenre] = useState("");
  const [isOn, setOn] = useState(false);

  let currentYear = new Date().getFullYear();
  let options = [];
  while (currentYear >= 1941) {
    options.push(`${currentYear}`);
    currentYear -= 1;
  }

  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Fantasy",
    "Horror",
    "Mystery",
    "Thriller",
  ];

  const changeYear = (val) => {
    if (val !== "all") {
      setValueYear(val);
    } else {
      setValueYear("");
    }
  };
  const changeGenre = (val) => {
    if (val !== "all") {
      setValueGenre(val);
    } else {
      setValueGenre("");
    }
  };

  const toggle = () => {
    isOn === true ? setOn(false) : setOn(true);
  };
  return (
    <>
      <Navbar />
      <div className="inputContainer">
        <div className="inputs">
          <input onKeyUp={(event) => setValue(event.target.value)} />
          <button>Search</button>
          <FaFilter className="filter" onClick={() => toggle()} />
        </div>
        {isOn ? (
          <div className="fields">
            <div className="field">
              <div className="yearButton">
                <span>Year: </span>
                <select
                  id="year"
                  name="year"
                  onChange={(e) => changeYear(e.target.value)}
                >
                  <option value="all">All</option>
                  {options.map((date) => (
                    <option value={date}>{date}</option>
                  ))}
                </select>
              </div>
              <div className="genreButton">
                <span>Genre: </span>
                <select
                  id="genre"
                  name="genre"
                  onChange={(e) => changeGenre(e.target.value)}
                >
                  <option value="all">All</option>
                  {genres.map((genre) => (
                    <option value={genre}>{genre}</option>
                  ))}
                </select>
              </div>
            </div>
            <Movies
              value={value.toLowerCase()}
              year={valueYear}
              genre={valueGenre}
            />
          </div>
        ) : (
          <Movies
            value={value.toLowerCase()}
            year={valueYear}
            genre={valueGenre}
          />
        )}
      </div>
    </>
  );
};

export default InputField;
