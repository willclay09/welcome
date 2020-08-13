import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route
        exact
        path="/"
        render={(props) => <Welcome {...props} name="William" />}
      />
      <Route path="/Clock" component={Clock} />
      <Route path="/Contact" component={Contact} />
    </div>
  );
}

export default App;
