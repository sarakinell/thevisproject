import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { piedata } from "../../assets/data/piedata.js";

class PieChart extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ResponsivePie
          data={piedata}
          margin={{
            top: 40,
            right: 80,
            bottom: 80,
            left: 80
          }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors="d320c"
          colorBy="id"
          borderColor="inherit:darker(0.6)"
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor="inherit"
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              translateY: 56,
              itemWidth: 60,
              itemHeight: 14,
              symbolSize: 20,
              symbolShape: "circle"
            }
          ]}
        />
      </React.Fragment>
    );
  }
}

export default PieChart;
