import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <a
          href="https://github.com/priscarabelli/weather-App-git"
          target="_blank
"
        >
          {" "}
          Open-sourced{" "}
        </a>
        <span className="name"> by Pri Scarabelli </span>
        <br />
        <span>Hosted on </span>
        <a href="https://weatherbypri.netlify.app/" target="_blank">
          Netlify
        </a>
      </footer>
    </div>
  );
}
