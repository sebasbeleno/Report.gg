import React, { Component } from "react";

import Navbar from "../components/Navbar";
import PageLoading from '../components/PageLoading';
import api from "../api";
export default class Home extends Component {

  state = {
      loading: true,
      error: null,
      summoner: null,
      summonerIcon: null
  }
  componentDidMount() {
    console.log(this.props.match.params.summonerName)
    this.fetchData()
  }

  fetchData = async e =>  {
    this.setState({loading: true, error: null})

    try{
        console.log("Data.")
        const data = await api.summoner.general(this.props.match.params.summonerName)
        console.log("No se")
        console.log(data)
        this.setState({loading: false, summoner: data, summonerIcon: `http://avatar.leagueoflegends.com/lan/${data.summonerName}.png`}) 
    } catch (err){
        console.log(err)
        this.setState({loading: false, error: err})
    }
  }

  render() {

    if(this.state.loading){
       return <PageLoading />
    }

    return (
      <div>
        <Navbar />

        <div className="info">
          <div className="container inforcontainer">
            <div className="row">
              <div className="col-sm-6">
                <img src={this.state.summonerIcon} alt={this.state.summoner.name}/>
              </div>
              <div className="col-sm-6 textInfo">
                  <h1>{this.state.summoner.name}</h1>
                  <p>Level: <strong>{this.state.summoner.summonerLevel}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
