import React from "react";

class SummonerForm extends React.Component {


  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="input-group mb-3">
          <div class="input-group-prepend">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              SummonerForm         aria-haspopup="true"
              aria-expanded="false"
            >
              LAN
            </button>
            <div class="dropdown-menu">
              <p class="dropdown-item" >
                LAN
              </p>
              <p class="dropdown-item" >
                LAS
              </p>
              <p class="dropdown-item" >
                KR
              </p>
            </div>
          </div>
          <input
            placeholder="Type your summoner name"
            type="text"
            className="form-control"
            name="summoner"
            id="summoner"
          />
          <div className="input-group-prepend">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
    );
  }
}

export default SummonerForm