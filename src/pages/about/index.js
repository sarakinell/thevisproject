import React from "react";
import "./index.css";
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyAkNzjkA9aj7rnGWVab-ZNSqIoeOmR9DfQ",
  authDomain: "the-vis-project.firebaseapp.com",
  databaseURL: "https://the-vis-project.firebaseio.com",
  projectId: "the-vis-project",
  storageBucket: "the-vis-project.appspot.com",
  messagingSenderId: "945876897832"
};

firebase.initializeApp(config);

var database = firebase.database();
var date = new Date();

function writeMessage(timestamp, email, message) {
  database.ref("messages/" + timestamp).set({
    email: email,
    message: message
  });
}

class About extends React.Component {
  state = {
    emailValue: null,
    messageValue: null
  };

  handleEmailChange = event => {
    this.setState({ emailValue: event.target.value }, () =>
      console.log(this.state)
    );
  };

  handleMessageChange = event => {
    this.setState({ messageValue: event.target.value }, () =>
      console.log(this.state)
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    const { emailValue, messageValue } = this.state;

    const data = { emailValue, messageValue };
    console.log("Email and message: ", data);

    writeMessage(date.getTime(), emailValue, messageValue);
  };

  render() {
    return (
      <React.Fragment>
        <div className="about-container">
          <h2 className="about title">About</h2>
          <h3 className="about subtitle">The vis project</h3>
          <p className="about text">
            On September 9th, the Swedish General Election will be held. During
            this day, the citizens will elect the Riksdag, the supreme
            decision-making body of Sweden, which in turn elects the Prime
            Minister of the country. <br />
            <br />The vis project is created with the aim to engage individuals
            in political matters through simple, intuitive and interactive data
            visualisations. 'Vis' are the first three letters in 'visualize',
            which is one of the main learning objectives of this project.
            Additionally, 'vis' means 'wise' in Swedish, which gives the name of
            this interactive blog yet another dimension and meaning.<br />
            <br />The vision is to create a beautiful platform that spurs
            interest, curiosity and general knowledge about the political system
            and situation in Sweden, and to motivate people to make more
            informed decisions.<br />
            <br />
            As a starting point, visualisations and blog posts are created for
            topics that provide and overview of the current and recent political
            situation in the country. Interactive information related to recent
            gallup polls, results from the last election, number of seats in the
            European Union for different parties, and the current political
            engagement level in the country are all already available. Feel free
            to reach out with questions, comments, feedback or ideas. Any kind
            of input is highly valuable!
          </p>
          <h2 className="form title">Contact us</h2>
          <form id="contact-form" onSubmit={this.handleSubmit}>
            <input
              className="email-input"
              type="text"
              value={this.state.emailValue}
              onChange={this.handleEmailChange}
              placeholder="Your email"
            />
            <textarea
              name="comment"
              className="message-input"
              multiline={true}
              type="text"
              value={this.state.messageValue}
              onChange={this.handleMessageChange}
              placeholder="Write your message..."
            />
            <button className="submit-button">Send</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
