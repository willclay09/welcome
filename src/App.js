import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Error from "./components/error/Error";
import Jeopardy from "./components/jeopardy/Jeopardy";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Welcome name="William" />
        </Route>
        <Route
          path="/Welcome/:name"
          render={(props) => (
            <Welcome {...props} name={props.match.params.name} />
          )}
        />
        <Route path="/Clock">
          <Clock />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route>
          <Jeopardy />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
