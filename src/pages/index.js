import React, { Component } from "react";
import Router from 'next/router'

import Navbar from "../components/Navbar";
import SummonerForm from "../components/SummonerForm";

import Lux from '../images/lux.png'
import Lee from '../images/lee.png'
import Discord from '../images/discord.png'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    var summonerName = e.target.summoner.value;
    var region = e.target.region.value

    region = region.toLocaleLowerCase()

    Router.push({pathname: `/summoner/${region}/${summonerName}`})
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="landing">
          <div  className="form">
              <div className="title">
                <h1>Escala con cada juego </h1>
                <SummonerForm onSubmit={this.handleSubmit.bind(this)} />
              </div>
          </div>
          <div className="LuxImage">
            <img src={Lux}></img>
          </div>
        </div>

        <section className="section2">
          <div className="text">
            <div className="section2Text">
              <h1>Report.gg donde quieras.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Morbi maximus erat lectus, quis
fringilla neque tempor ac. Maecenas sit amet ex
volutpat, aliquam tortor id, sodales massa.</p>

              <div className="externalIcons">
                <img src={Discord}></img>
              </div>

            </div>
          </div>
          <div className="LeeImage">
            <img src={Lee}></img>
          </div>
        </section>

        
      </div>
    );
  }
}
