import React from "react";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="sticky-top bg-light p-4">
      <nav className="navbar-expand-lg navbar-light">
        <div className="navbar-collapse justify-content-between" id="navbarSupportedContent">
          <h1 className="ml-5"><Link to="/">Linh Le</Link></h1>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link active">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;