import React from "react";
import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDqgjAA1aQagEQ1nMx1eDm7GBvMF6pJ82w",
  authDomain: "nwitter-61071.firebaseapp.com",
  projectId: "nwitter-61071",
  storageBucket: "nwitter-61071.appspot.com",
  messagingSenderId: "653801352300",
  appId: "1:653801352300:web:91db5c8baf89f18e4ebc49",
  measurementId: "G-6C69X7NQWD",
};

firebase.initializeApp(firebaseConfig);

export const messaging = firebase.messaging();
