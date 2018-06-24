import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { bardata } from "../../assets/data/bardata.js";

class BarChart extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ResponsiveBar
          data={bardata}
          keys={["rightpercentage", "leftpercentage"]}
          legend={["Right coalition", "Left coalition"]}
          indexBy="party"
          margin={{
            top: 50,
            right: 130,
            bottom: 50,
            left: 60
          }}
          padding={0.3}
          colors="d310"
          colorBy="id"
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#e20b0b",
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          fill={[
            {
              match: {
                id: "rightpercentage"
              },
              id: "dots"
            },
            {
              match: {
                id: "leftpercentage"
              },
              id: "lines"
            }
          ]}
          borderColor="inherit:darker(1.6)"
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Party",
            legendPosition: "center",
            legendOffset: 40
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "% of votes",
            legendPosition: "center",
            legendOffset: -40
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor="transparent"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          theme={{
            tooltip: {
              container: {
                fontSize: "14px"
              }
            },
            labels: {
              textColor: "#555"
            }
          }}
        />
      </React.Fragment>
    );
  }
}

export default BarChart;
