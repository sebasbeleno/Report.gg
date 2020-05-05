import React from 'react'

class MatchItem extends React.Component{

    state = {
        winlose: "none",
        items: {}
    }

    componentDidMount(){
        if(this.props.match.win == "True"){
            this.setState({winlose: "win"})
        }else{
            this.setState({winlose: "lose"})
        }

        this.props.match.items.pop()
    }

    render(){
        return(
            <div  className={` matchItem ${this.state.winlose}`}>
                <div className="campeonJugado">
                    <img className="campeonIcon" src={this.props.match.campeon.image}></img>
                    <h3>{this.props.match.campeon.nombre}</h3>    
                    <div className="habilidadesDeInvocador">
                        <img src={this.props.match.campeon.habilidades.habilidad_d.imagen}></img>
                        <img src={this.props.match.campeon.habilidades.habilidad_f.imagen}></img>
                    </div>            
                </div>

                <div className="informacion">
                    <div className="basico">
                            <h5>{this.props.match.asesinatos}/{this.props.match.muertes}/{this.props.match.asistencias}</h5>
                            <p>CS:{this.props.match.cs}</p>
                    </div>
                    <div className="kda">
                        <p>KDA: {this.props.match.kda}</p>
                    </div>
                </div>
                
                <div className="items">
                    {this.props.match.items.map(item => {
                        return(
                            <img src={item.image}></img>
                        )
                    })}
                </div>

                <div className="equipos">
                    <div className="equipoAzul">
                        {this.props.match.equipo_azul.map(participante => {
                            return(
                                <>
                                    <p>{participante.invocador}</p>
                                    <img  src={participante.icono_campeon   }></img>
                                </>
                            )
                        })}
                    </div>
                    <div className="equipoRojo">
                        {this.props.match.equipo_rojo.map(participante => {
                            return(
                                <>
                                    <img  src={participante.icono_campeon   }></img>
                                    <p>{participante.invocador}</p>
                                </>
                            )
                        })}
                    </div>
                </div>
                
            </div>
        )
    }
}

class MatchList extends React.Component{
    render(){
        return(
            <>
                {this.props.MatchList.map(match => {
                    return(
                        <MatchItem match={match} />
                    )
                })}
            </>
        )
    }
}

export default MatchList