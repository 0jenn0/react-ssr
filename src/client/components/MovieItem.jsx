import React from "react";
import { TMDB_THUMBNAIL_URL } from "../constants.js";
import starEmptyImage from "@images/star_empty.png";
import round from "../util/round.js";

const MovieItem = ({ id, posterUrl, title, voteAverage }) => {
  return (
    <a className="item" href={`/detail/${id}`}>
      <img
        className="thumbnail"
        src={`${TMDB_THUMBNAIL_URL}${posterUrl}`}
        alt={`${title}`}
      />
      <div className="item-desc">
        <p className="rate">
          <img src={starEmptyImage} className="star" alt="" />
          <span>{round(voteAverage)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </a>
  );
};

export default MovieItem;
