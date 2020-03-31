import React from "react";
import { Dropdown } from 'semantic-ui-react'

const servers = [
  {
    key: 'LAN',
    text: 'LAN',
    value: 'LAN'
  },
  {
    key: 'LAS',
    text: 'LAS',
    value: 'LAS'
  },{
    key: 'NA',
    text: 'NA',
    value: 'NA'
  },
]

class SummonerForm extends React.Component {

  handleChange = (e, { value }) => this.setState({ region:value })

  state = {
    region: 'LAN',
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="input-group mb-3">
          <Dropdown
            placeholder="Selecciona Región"
            selection
            value={this.state.region}
            options={servers}
            onChange={this.handleChange}
          />
          <input
            placeholder="Type your summoner name"
            type="text"
            className="form-control"
            name="summoner"
            id="summoner"
          />
          <input type="text" id="region" name="region" value={this.state.region}/>
          <div className="input-group-prepend">
            <button className="btn btn-primary">Buscar</button>
          </div>
        </div>
      </form>
    );
  }
}

export default SummonerForm