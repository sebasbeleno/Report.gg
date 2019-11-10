import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
import Summoner from "../pages/Summoner";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/summoner/:summonerName" component={Summoner} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
