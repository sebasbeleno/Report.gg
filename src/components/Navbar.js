import React from "react";
import { Link } from "react-router-dom";

import "./Styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Link className="navBrand" to="/">
                <span className="font-weight-light">Report.</span>
                <span className="font-weight-bold">gg</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
