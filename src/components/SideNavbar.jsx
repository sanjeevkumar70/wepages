import React from "react";
import "./SideNavbar.css";
import image1 from "./image/Vector 771 (Stroke).svg";
import image2 from "./image/plus.svg";
import image3 from "./image/image 897.svg";
import image4 from "./image/image 898.svg";
import image5 from "./image/image 899.svg";
import image6 from "./image/image 900.svg";
import image7 from "./image/image 901.svg";
import image8 from "./image/image 902.svg";
const SideNavbar = () => {
  return (
    <>
      <div>
        <div className="icon-box" style={{ backgroundColor: "#29B712" }}>
          <img src={image1} alt="" />
        </div>
        <div className="icon-box">
          <img src={image2} alt="" />
          <p>NEW</p>
        </div>
        <div className="icon-box">
          <img src={image3} alt="" />
          <p>PATIENT</p>
        </div>
        <div className="icon-box">
          <img src={image4} alt="" />
          <p>FOLDER</p>
        </div>
        <div className="icon-box">
          <img src={image5} alt="" />
          <p>UPLOAD</p>
        </div>
        <div className="icon-box">
          <img src={image6} alt="" />
          <p>REPORT</p>
        </div>
        <div className="icon-box">
          <img src={image7} alt="" />
          <p>SETTING</p>
        </div>
        <div className="icon-box">
          <img src={image8} alt="" />
          <p>LOGOUT</p>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
