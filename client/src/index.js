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

const firebaseConfig = {  apiKey: "AIzaSyBLZISjsN-iui4guWXQjaBL2n-15OAAqMs",
  authDomain: "vercel-80b47.firebaseapp.com",
  projectId: "vercel-80b47",
  storageBucket: "vercel-80b47.appspot.com",
  messagingSenderId: "376772079809",
  appId: "1:376772079809:web:55f93e1acec4ab062ee440",
  measurementId: "G-YM9RRN9WNG"
  };

  firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);
