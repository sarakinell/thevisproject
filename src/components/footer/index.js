import React from "react";
import "./index.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="blogpost-footer">
        <div className="left">
          <p className="footer-text">
            <a href="http://www.riksdagen.se/en/">The Swedish Riksdag</a>
            <br />
            <a href="http://www.scb.se/en/">Statistics Sweden </a>
            <br />
            <a href="https://github.com/sarakinell/thevisproject">GitHub </a>
          </p>
        </div>
        <div className="center">
          <p className="footer-text">
            Powered by <a href="http://nivo.rocks/">Nivo</a>,{" "}
            <a href="https://reactjs.org/">React</a> &{" "}
            <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
              Flexbox
            </a>
          </p>
        </div>
        <div className="right">
          <p className="footer-text">
            <a href="mailto:skinell@ethz.ch">Sara Kinell</a> <br />© Copyright
            2018
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
