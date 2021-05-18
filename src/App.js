import React from "react";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import Room from "./pages/Room";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Room} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
