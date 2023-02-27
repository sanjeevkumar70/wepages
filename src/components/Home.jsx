import React from "react";
import SideNavbar from "./SideNavbar";
import "./Home.css";
import ContentCard from "./ContentCard";
const Home = () => {
  return (
    <>
      <div className="card-data">
        <div className="verticalnav-left">
          <SideNavbar />
        </div>
        <div className="content-right">
          <ContentCard />
        </div>
      </div>
    </>
  );
};

export default Home;
