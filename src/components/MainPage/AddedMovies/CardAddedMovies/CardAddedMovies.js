import React from "react";
import "./CardAddedMovies.css";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const CardAddedMovies = ({
  data,
  deleteMovieFromList,
  moveToWatchedMovies,
  moveUp,
  moveDown,
  filterByGener
}) => {

  return (
    <section className="toWatchMovie">
      <div className="rating">
        <p>{data.imdbRating}</p>
      </div>

      <div className="details">
        <Link to={`./movie/${data.id}`}>
          <p className="title">{data.Title}</p>
        </Link>
        <div className="genre">
          {data.Genre.split(",").map((data) => 
            (<p onClick={e => {
              e.preventDefault();
              filterByGener(data);}} 
                key={uuid()}>
                {data}
              </p>))
          }
        </div>
      </div>

      <div className="btn">
        <button onClick={() => deleteMovieFromList(data.id)}>
          <img src="https://bit.ly/3tHSLib" alt="delete_icon" />
        </button>
        <button onClick={() => moveToWatchedMovies(data)}>
          <img src="https://bit.ly/3hinboG" alt="eye_icon" />
        </button>

        <div className="arrowUpDown">
          <button onClick={() => moveUp(data.imdbID)}>
            <img src="https://bit.ly/3tRptxI" alt="arrow_icon" />
          </button>
          <button onClick={() => moveDown(data.imdbID)}>
            <img src="https://bit.ly/3tRptxI" alt="arrow_icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardAddedMovies;