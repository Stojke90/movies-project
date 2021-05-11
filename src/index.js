import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import { BrowserRouter } from "react-router-dom";

var firebaseConfig = {
    apiKey: "AIzaSyCKE5wL2ZFfH55pL2PX-G13P_d4jsRYai0",
    authDomain: "newproject-d4246.firebaseapp.com",
    projectId: "newproject-d4246",
    storageBucket: "newproject-d4246.appspot.com",
    messagingSenderId: "258889468854",
    appId: "1:258889468854:web:380f545d5e3996ac558f17"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));
