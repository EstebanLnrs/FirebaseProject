import React, { Component } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
export default class Footer extends Component {

  render() {
    let resumeData = this.props.resumeData;
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
    return (
      <footer>
        <div className="row">
          <div className="">
            <ul className="social-links">
              {resumeData.socialLinks.map((item) => {
                return (
                  <li key={item.name}>
                    <a href={item.url} target="_blank">
                      Téléchargez mon CV
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
