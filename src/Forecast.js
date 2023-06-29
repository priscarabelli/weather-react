import React from "react";
import "./index";
import "./index.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="container weekly-forecast">
        <div className="row">
          <div className="col-sm-2">Mon</div>
          <div className="col-sm-2">Tue</div>
          <div className="col-sm-2">Wed</div>
          <div className="col-sm-2">Thu</div>
          <div className="col-sm-2">Fri</div>
          <div className="col-sm-2">Sat</div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            {" "}
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt=""
              className="img-fluid"
              width="80px"
            />{" "}
          </div>
          <div className="col-sm-2">
            {" "}
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt=""
              className="img-fluid"
              width="80px"
            />{" "}
          </div>{" "}
          <div className="col-sm-2">
            {" "}
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt=""
              className="img-fluid"
              width="80px"
            />{" "}
          </div>{" "}
          <div className="col-sm-2">
            {" "}
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt=""
              className="img-fluid"
              width="80px"
            />{" "}
          </div>{" "}
          <div className="col-sm-2">
            {" "}
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt=""
              className="img-fluid"
              width="80px"
            />{" "}
          </div>{" "}
          <div className="col-sm-2">
            {" "}
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt=""
              className="img-fluid"
              width="80px"
            />{" "}
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2"> 31° | 17°</div>
          <div className="col-sm-2">29° | 17°</div>
          <div className="col-sm-2">26° | 17°</div>
          <div className="col-sm-2">24° | 14°</div>
          <div className="col-sm-2">25° | 14°</div>
          <div className="col-sm-2">26° | 14°</div>
        </div>
      </div>
    </div>
  );
}
