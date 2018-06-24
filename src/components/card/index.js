import React from "react";
import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {
    const { graph, text, imagetext, recent } = this.props;
    const url = "/blog/".concat(text);
    return (
      <div className={recent ? "large-card" : "card"}>
        <Link className="card-link" to={url}>
          <div className="card-element" style={{ height: "40vh" }}>
            {graph}
          </div>
        </Link>
        <p className="card-description">{imagetext}</p>
      </div>
    );
  }
}

export default Card;
