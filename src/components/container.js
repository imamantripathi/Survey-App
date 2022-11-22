import React, { Component } from "react";
import Details from "./details";
import Question from "./question";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase/compat/app";
// Other libraries might need to also be prefixed with "compat":
import "firebase/compat/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaVvuhnGSbjlSsNbiI6ebBPQ268ki1jHs",
  authDomain: "survey-app-1a07c.firebaseapp.com",
  projectId: "survey-app-1a07c",
  storageBucket: "survey-app-1a07c.appspot.com",
  messagingSenderId: "344071933763",
  appId: "1:344071933763:web:5adff11a8e8bc86e60a9f6",
  measurementId: "G-7CG8DLWPYL",
};
if (firebase.apps.length < 0) {
  firebase.initializeApp(firebaseConfig);
}
class container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: uuidv4(),
      name: null,
      email: null,
      questions: {
        q1: null,
        q2: null,
      },
      isSubmitted: false,
    };
  }
  detailSubmitHandler = (event) => {
    const name = event.target.name.value;
    const email = event.target.email.value;
    this.setState({ name, email });
    event.preventDefault();
  };
  questionSubmitHandler = (event) => {
    event.preventDefault();
    const questions = {};
    questions.q1 = event.target.q1.value;
    questions.q2 = event.target.q2.value;
    this.setState({ questions });
    
    const databases = firebase.database();
    databases.ref("survey/" + this.state.id).set({
      name: this.state.name,
      email: this.state.email,
      questions: this.state.questions,
    });
  };
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="container card mt-2">
            <h1 className="text-center text-primary">Survey App</h1> <hr />
            {this.state.name === null && this.state.email === null ? (
              <Details submit={this.detailSubmitHandler} />
            ) : (
              <Question submit={this.questionSubmitHandler} />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default container;
