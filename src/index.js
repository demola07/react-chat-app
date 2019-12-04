import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

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

ReactDOM.render(<div>Hello World!!!</div>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
