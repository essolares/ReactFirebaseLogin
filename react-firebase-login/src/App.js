import React, { Component , useState, useEffect} from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import MainPanel from "./pages/MainPanel";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { auth } from "./services/firebase";
import './styles.css';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest} render = { props => authenticated === true ? 
        ( <Component {...props} /> ) : 
        ( <Redirect to={{ pathname: "/login", state: { from: props.location } }} /> )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest} render={props => authenticated === false ? 
        ( <Component {...props} /> ) : 
        ( <Redirect to="/mainpanel" /> )
      }
    />
  );
}

const App = () => {
  const [authenticated, setAutenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    auth().onAuthStateChanged(user => {
      if (user) {
        setAutenticated(true);
        setLoading(false);
      } else {
        setAutenticated(false);
        setLoading(false);
      }
    });
  },[])

  return loading === true ? (
    <div className="spinner-border text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute
            path="/mainpanel"
            authenticated={authenticated}
            component={MainPanel}
          />
          <PublicRoute
            path="/signup"
            authenticated={authenticated}
            component={Signup}
          />
          <PublicRoute
            path="/login"
            authenticated={authenticated}
            component={Login}
          />
        </Switch>
      </Router>
    );
 
}

export default App;