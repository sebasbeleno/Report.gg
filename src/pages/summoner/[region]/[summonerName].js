import React, { Component } from "react";
import MatchList from '../../../components/MatchList'
import { Pie, Doughnut } from 'react-chartjs-2'
import Navbar from "../../../components/Navbar";
import PageLoading from "../../../components/PageLoading";
import api from "../../../api";
import { Button } from "semantic-ui-react";
export default class Home extends Component {
  static getInitialProps({ query }) {
    return { query };
  }


  

  state = {
    loading: true,
    error: null,
    summoner: null,
    summonerIcon: null,
    winRatio: null,
    emblem: "../../../images/Emblem_Silver.png"
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.summoner.general(
        this.props.query.region,
        this.props.query.summonerName
      );
      let win_ratio = 0
      let lose_ratio = 0
      win_ratio = data.win_ratio
      lose_ratio = 100 - win_ratio

      console.log(win_ratio)
      console.log(lose_ratio)


      let winRate

      winRate = {
        datasets: [{
            data: [win_ratio, lose_ratio],
            backgroundColor: ["#4ac036", "#f45247",],
        }],
       
      };
        
      this.setState({winRatio: winRate})

      
      
      this.setState({ summoner: data });
      this.setState({loading: false,})

    } catch (err) {
      this.setState({ loading: false, error: err });
    }

  };




  render() {


    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
    return <h1>{this.state.error}}</h1>;
    }

    
    const { image } = this.state;
    return (
      <div>
        <Navbar />
        <div className="contenedor">
          <div className="profileIcon">
            <div className="item">
            <span className="notify-badge">{this.state.summoner.level}</span>
            <img
              src={this.state.summoner.iconUrl}
              alt={this.state.summoner.name}
            />
            </div>
          </div>
          <div className="summonerBasicInfo">
            <h1>{this.state.summoner.name}</h1>
            <Button content="Actualizar">
            </Button>
          </div>
          <div>

            <Doughnut data={this.state.winRatio} /> 

          </div>
          <div className="rankedInfo">
            <img src={'../.../.../images/Emblem_Silver.png'}></img>
            <div className="rankedText">
            <h3>{this.state.summoner.ranked_solo_fives.tier} {this.state.summoner.ranked_solo_fives.division}</h3>
            <h4>Ranked solo fives</h4>
            <h4>{this.state.summoner.ranked_solo_fives.league_points}</h4>
            </div>
          </div>
          <div className="MatchList">
            <MatchList MatchList={this.state.summoner.matchs}/>
          </div>
          <div className="mostPlayed">
            <h3>Campeones más jugados</h3>
            {this.state.summoner.campeones_mas_jugados.map(campeon => {
              return(
                <>
                  <div className="campeonIcon">
                    <img src={campeon.campeon.icon}></img>
                  </div>
                  <div className="campeonName">
                    <h6>{campeon.campeon.nombre}</h6>
                  </div>
                  <div className="campeonCantidad">
                    <p>{campeon.cantidad}</p>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}
