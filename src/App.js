import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';
import './App.css';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8WF2uVB-abEXFK2-HmXW9ceqdbKzgKXQ",
    authDomain: "bloc-chat-react-cec.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-cec.firebaseio.com",
    projectId: "bloc-chat-react-cec",
    storageBucket: "",
    messagingSenderId: "920545431027"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <RoomList firebase={firebase} />
    );
  }
}

export default App;
