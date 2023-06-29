import React from "react";
import "./index.css";

export default function Search() {
  return (
    <div>
      <form id="input-form">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="search-bar"
            autocomplete="off"
            placeholder="Enter city here"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              id="search-button"
              type="button"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button
              className=" btn btn-outline-secondary"
              id="current-button"
              type="button"
            >
              <i className="fa-solid fa-location-dot"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
