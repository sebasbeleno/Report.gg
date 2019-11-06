import React, { Component } from "react";

import "./styles/Home.css";
import Navbar from "../components/Navbar";
import poro from "../images/poro.png";
import SummonerForm from '../components/SummonerForm'
import '../../node_modules/kayn/dist/lib/Kayn'
export default class Home extends Component {
  
  
    handleSubmit(e){ 
        e.preventDefault();
        console.log(e.target.summoner.value)
      }

  render() {
    return (
      <div>
        <Navbar />
        
        <div className="container " tyle="height: 100px;">
          <div className="row ">
            <div className="col-md-6 col-sm-6 mb-5">
              <div className="title">
                <h1>Obtén asistencia, estádistica & mucho más </h1>
                <SummonerForm
                    onSubmit={this.handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="container inforcontainer">
            <div className="row">
              <div className="col-sm-6">
                <img
                  src={poro}
                  className="img-fluid"
                  alt="Poro :D"
                  width="560px"
                />
              </div>
              <div className="col-sm-6 textInfo">
                <h1>By LATAM, for LATAM </h1>
                <p>
                  Report.gg is develod by{" "}
                  <a href="http://sebasbeleno.herokuapp.com/">
                    Sebastian Beleño
                  </a>
                  , LoL and coffee lover. This proyect is open source, you can
                  wacht the full code in GitHub :D.
                </p>

                <p>
                  If you wanna, you can donate to the proyect to implement new
                  upgrades and new features :D.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
