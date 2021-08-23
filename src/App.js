import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./containers/Home";

const App = () => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  // const [token, setToken] = useState(true);
  return (
    <>
      <Router>
        <Switch>
          {token ? (
            <Route exact path="/" component={Home} />
          ) : (
            <>
              <Route exact path="/" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </>
          )}
        </Switch>
      </Router>
    </>
  );
};

export default App;
