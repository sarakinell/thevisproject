import React from "react";
import Card from "../../components/card";
import BarChart from "../../components/barchart";
import LineChart from "../../components/linechart";
import PieChart from "../../components/piechart";
import RadarChart from "../../components/radarchart";

class Blog extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="blog-container">
          <Card
            graph={<LineChart />}
            text="historicalresults"
            imagetext="Election results from the last vote in 2014"
          />
          <Card
            graph={<BarChart />}
            text="pollresults"
            imagetext="Gallup poll from May 2018"
          />
          <Card
            graph={<PieChart />}
            text="euseats"
            imagetext="Number of seats per party in the European Parliament"
          />
          <Card
            graph={<RadarChart />}
            text="engagement"
            imagetext="Political engagement overview"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
