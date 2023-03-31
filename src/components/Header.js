import React, { Component } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../services/firebase.js'

export default class Header extends Component {

  render() {
    const firebaseConfig = {
      apiKey: "AIzaSyBFRxvobjWBjd7oRhNvUZRUTYUdxLrjkTg",
      authDomain: "cvesteb.firebaseapp.com",
      projectId: "cvesteb",
      storageBucket: "cvesteb.appspot.com",
      messagingSenderId: "596913321493",
      appId: "1:596913321493:web:183702522bd399e97d801c",
      measurementId: "G-G8BRNHX498"
    };

    firebase.initializeApp(firebaseConfig);
    const handleGoogle = async (e) => {
      const provider = await new GoogleAuthProvider();
      return signInWithPopup(auth, provider)

    }
    return (
      <React.Fragment>
        <button onClick={handleGoogle}>
          Sign in with Google
        </button>
        <header id="home">


          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">
                Bienvenue sur mon site.
              </h1>
            </div>
          </div>

        </header>
      </React.Fragment>
    );
  }
}
