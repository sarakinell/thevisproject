import React from "react";
import "./index.css";
import Header from "../../components/header";
import BarChart from "../../components/barchart";
import LineChart from "../../components/linechart";
import PieChart from "../../components/piechart";
import RadarChart from "../../components/radarchart";
import Card from "../../components/card";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="blog-container">
          <div className="large-card">
            <h2 className="large-card-title">Most recent news</h2>
            <Card
              graph={<BarChart />}
              text="pollresults"
              imagetext="How the Swedes would vote if the election was today"
              recent
            />
          </div>
          <div className="card-container">
            <Card
              graph={<LineChart />}
              text="historicalresults"
              imagetext="Election results 2014"
            />
            <Card
              graph={<PieChart />}
              text="euseats"
              imagetext="Seats in the European Parliament"
            />
            <Card
              graph={<RadarChart />}
              text="engagement"
              imagetext="Political engagement"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
