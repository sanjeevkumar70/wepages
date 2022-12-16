import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            Medical Darpan
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active text-light" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link active text-light" href="#">
                Products
              </a>
              <a className="nav-link active text-light" href="#">
                Distributers
              </a>
              <a className="nav-link active text-light">Manufactures</a>
              <a className="nav-link active text-light">About Us</a>
              <a className="nav-link active text-light">Blog</a>
            </div>
          </div>
          <div class="flex-row-reverse" role="search">
          <a href="" className="">Login</a>
          <a href=""><i className="fa-regular fa-user"></i></a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
