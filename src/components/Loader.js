import React, { Component } from "react";


export default class Loader extends Component {
  render() {
    return (
      <div className="container">
        <div className="row h-100">
          <div className="col-sm-12 my-auto">
            <div className="w-25 mx-auto">
              <div className="lds-grid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
