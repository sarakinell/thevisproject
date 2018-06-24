import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { linedata } from "../../assets/data/linedata.js";

class LineChart extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ResponsiveLine
          data={linedata}
          margin={{
            top: 50,
            right: 130,
            bottom: 50,
            left: 80
          }}
          minY="auto"
          curve="cardinal"
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Party",
            legendOffset: 40,
            legendPosition: "center"
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Number of votes",
            legendOffset: -60,
            legendPosition: "center"
          }}
          colors="pastel1"
          dotSize={10}
          dotColor="inherit:darker(0.3)"
          dotBorderWidth={2}
          dotBorderColor="#ffffff"
          enableDotLabel={false}
          dotLabel="y"
          dotLabelYOffset={-12}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              translateX: 120,
              itemWidth: 100,
              itemHeight: 18,
              symbolSize: 12,
              symbolShape: "circle"
            }
          ]}
        />
      </React.Fragment>
    );
  }
}

export default LineChart;
