import React, { Component } from "react";


export default class Loader extends Component {
  render() {
    return (
      <div className="container">
        <div class="row h-100">
          <div class="col-sm-12 my-auto">
            <div class="w-25 mx-auto">
              <div class="lds-grid">
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
