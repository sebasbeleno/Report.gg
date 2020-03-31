import React, { Component } from "react";
import Router from 'next/router'

import Navbar from "../components/Navbar";
import SummonerForm from "../components/SummonerForm";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    var summonerName = e.target.summoner.value;
    var region = e.target.region.value

    Router.push({pathname: '/summoner', query:{summonerName: `${summonerName}`, region: `${region}`}})
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="container " tyle="height: 100px;">
          <div className="row ">
            <div className="col-md-6 col-sm-6 mb-5">
              <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <div className="title">
                    <h1>Escala con cada juego </h1>
                    <SummonerForm onSubmit={this.handleSubmit.bind(this)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
