import React from "react";
import logo from "./css/img/Alter_png.jpg";


function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" />
          </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link green" href="#Syndrome">Syndrome <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link orange" href="#Game">Game</a>
            </li>
            <li className="nav-item">
              <a className="nav-link blue" href="#Contact">Contact</a>
            </li>
          </ul>

          <a className="DL" href="#">DOWNLOAD THE GAME</a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
