import React from "react";

class SCBData extends React.Component {
  fetchData = url => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        query: [
          {
            code: "Region",
            selection: {
              filter: "item",
              values: ["00"]
            }
          },
          {
            code: "ContentsCode",
            selection: { filter: "item", values: ["ME0105B5"] }
          },
          { code: "Tid", selection: { filter: "all", values: ["*"] } }
        ],
        response: { format: "json" }
      })
    })
      .then(response => response.json())
      .then(parsedJSON => {
        var participation = {};
        for (var i in parsedJSON.data) {
          participation[parsedJSON.data[i]["key"][1]] =
            parsedJSON.data[i]["values"];
        }
        console.log(participation);
        return <React.Fragment>participation</React.Fragment>;
      })
      .catch(error =>
        console.log("Parsing of data to fetch failed " + "\n", error)
      );
  };

  render() {
    const { text, url } = this.props;
    return (
      <React.Fragment>
        <div>{this.fetchData(url)}</div>
        <p>{text}</p>
      </React.Fragment>
    );
  }
}
export default SCBData;
