import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <a
          href="https://github.com/priscarabelli/weather-App-git"
          target="_blank" rel="noreferrer"
        >
          {" "}
          Open-sourced{" "}
        </a>
        <span className="name"> by Pri Scarabelli </span>
        <br />
        <span>Hosted on </span>
        <a href="https://reactweatherbypri.netlify.app/" target="_blank" rel="noreferrer">
          Netlify
        </a>
      </footer>
    </div>
  );
}
