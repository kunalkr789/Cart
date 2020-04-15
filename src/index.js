import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDsNthGm8VoCJDD2Ewp15IjUQWxdzI-Er8",
  authDomain: "cart-664d3.firebaseapp.com",
  databaseURL: "https://cart-664d3.firebaseio.com",
  projectId: "cart-664d3",
  storageBucket: "cart-664d3.appspot.com",
  messagingSenderId: "145113191301",
  appId: "1:145113191301:web:370792008587875803aaec"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


