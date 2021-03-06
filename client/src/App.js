import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Routes from "./components/routing/Routes";
import { LOGOUT } from "./actions/types";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

//temp
import axios from "axios";

import "./App.css";

//TODO: use redux hooks

const App = () => {
  useEffect(() => {
    //TODO: try to make a call to backend
    const getUser = async () => {
      try {
        let res = await axios.get("https://localhost:5001/api/Users");

        console.log("getUser: ", JSON.stringify(res.data));
      } catch (error) {
        console.log("getUserError: ", error);
      }
    };

    console.log("In App.js UE");
    getUser();
    // check for token in LS and load user
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
