import React, { Component } from "react";
import { useRouter } from 'next/router'

import Navbar from "../../../components/Navbar";
import PageLoading from '../../../components/PageLoading';
import api from "../../../api";
export default   class Home extends Component {

  static getInitialProps({query}) {
    return {query}
  }

  state = {
      loading: true,
      error: null,
      summoner: null,
      summonerIcon: null
  }
  componentDidMount() {
    this.fetchData()
    console.log(this.props.match)
  }

  fetchData = async e =>  {
    this.setState({loading: true, error: null})

    try{
        const data = await api.summoner.general(this.props.query.region, this.props.query.summonerName)
        this.setState({loading: false, summoner: data,})
    } catch (err){
        this.setState({loading: false, error: err})
    }
  }

  render() {

    if(this.state.loading){
       return <PageLoading />
    }

    if(this.state.error){
      return(
        <h1>INTERNAL SERVER ERROR</h1>
      )
    }

    return (
      <div>
        <Navbar />

        <div className="info">
          <div className="container inforcontainer">
            <div className="row">
              <div className="col-sm-6">
                <img src={this.state.summoner.iconUrl} alt={this.state.summoner.name}/>
              </div>
              <div className="col-sm-6 textInfo">
                  <h1>{this.state.summoner.name}</h1>
                  <p>Level: <strong>{this.state.summoner.level}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
