import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDqgjAA1aQagEQ1nMx1eDm7GBvMF6pJ82w",
  authDomain: "nwitter-61071.firebaseapp.com",
  projectId: "nwitter-61071",
  storageBucket: "nwitter-61071.appspot.com",
  messagingSenderId: "653801352300",
  appId: "1:653801352300:web:55c007104aa081874ebc49",
  measurementId: "G-YM9N6QX9K2",
};

firebase.initializeApp(firebaseConfig);

export const messaging = firebase.messaging();
