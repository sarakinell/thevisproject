import React from "react";
import "./index.css";
import background from "../../assets/images/riksdagen.jpg";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-wrapper">
          <div className="header-background">
            <img
              src={background}
              className="background-element"
              alt="Riksdagen in Stockholm"
            />
            <div className="header-title-wrapper">
              <h1 className="responsive-text">
                On the 9th of September, the national election takes place in
                Sweden. <br /> Discover facts about politics through interactive
                data visualisations!
              </h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Header;
