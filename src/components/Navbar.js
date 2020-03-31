import Link from "next/link";
import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar mr-auto navbar-expand-lg navbar-light bg-transparent">
          
          <Link href="/">
            <a className="navbar-brand" >
              Report.gg
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse mr-3"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" data-scroll href="#solutions">
                  Soluciones
                </a>
              </li>
              <li className="nav-item active">
                <Link onClick={this.handleHome} href="/">
                  <a className="nav-link" data-scroll>
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="" onClick={this.handleContact} href="/contact">
                  <a className="contacButtom nav-link">Contact us</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
