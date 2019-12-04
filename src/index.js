import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./components/login/login";
import SignupComponent from "./components/signup/signup";
import DashboardComponent from "./components/dashboard/dashboard";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDtTV6grh5NFrDp2byYgzpQYxd6mjYnGK8",
  authDomain: "instant-chat-71a04.firebaseapp.com",
  databaseURL: "https://instant-chat-71a04.firebaseio.com",
  projectId: "instant-chat-71a04",
  storageBucket: "instant-chat-71a04.appspot.com",
  messagingSenderId: "909144627905",
  appId: "1:909144627905:web:0c7178d4cf266122001240",
  measurementId: "G-286EKS5JSW"
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignupComponent}></Route>
      <Route path="/dashboard" component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
