import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <>
      <div>
        <div className="row">
          <div className="top-section">
            <p>
              <span className="heading">Diane Cooper</span>
              <span className="email">diane.cooper@example.com</span>
            </p>
          </div>
          <div className="col-md-7 left-side-content">
            <div className="left-box">
              <p>
                Gender <br /> <span>Female</span>
              </p>
            </div>
            <div className="left-box">
              <p>
                Birthday <br /> <span>Feb 24th, 1997</span>
              </p>
            </div>
            <div className="left-box">
              <p>
                Phone Number <br />
                <span>(239) 555 -0108</span>
              </p>
            </div>
            <div className="left-box">
              <p>
                Member status <br /> <span>Active Member</span>
              </p>
            </div>
          </div>
          <div className="col-md-5 right-side-content">
            <div className="right-box w-25">
              <p className="report fw-bold">VIEW ECG REPORT DOCUMENTS</p>
            </div>
            <div className="right-box ">
              <p>
                <span className="fw-bold">02</span>
                <br /> <span>Upcoming</span>
              </p>
            </div>
            <div className="right-box">
              <p>
                <span className="fw-bold"> 15</span> <br /> <span>Past</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Main;
