import React from "react";
import ReactDOM from "react-dom/client";
// import '../node_modules/animate.css/animate.css';
// import '../node_modules/animate.css/source/fading_entrances/fadeInUp.css';
// import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
// import '../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css';


// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';


// className "owl-theme" is optional


import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { HashRouter } from 'react-router-dom';

// FIREBASE CONFIGURATION
import firebase from 'firebase/compat/app';
import "firebase/compat/storage";

const firebaseConfig = { 
      apiKey: "AIzaSyAYV3IBu4ITaEv6n670cxVc6dYzB68WxqU",
    authDomain: "babulmadina-9e69c.firebaseapp.com",
    projectId: "babulmadina-9e69c",
    storageBucket: "babulmadina-9e69c.appspot.com",
    messagingSenderId: "100857525786",
    appId: "1:100857525786:web:35da479a32943d30da83a3",
    measurementId: "G-QPVF1XE5WS"
  };

  firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);
