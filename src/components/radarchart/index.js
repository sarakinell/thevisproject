import React from "react";
import { ResponsiveRadar } from "@nivo/radar";
import { radardata } from "../../assets/data/radardata.js";

class RadarChart extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ResponsiveRadar
          data={radardata}
          keys={[
            "Men in cities",
            "Men in rural areas",
            "Women in cities",
            "Women in rural areas"
          ]}
          indexBy="involvement"
          margin={{
            top: 70,
            right: 150,
            bottom: 40,
            left: 120
          }}
          curve="catmullRomClosed"
          borderWidth={2}
          borderColor="inherit"
          gridLevels={5}
          gridShape="circular"
          gridLabelOffset={36}
          enableDots={true}
          dotSize={8}
          dotColor="inherit"
          dotBorderWidth={0}
          dotBorderColor="#ffffff"
          enableDotLabel={false}
          dotLabel="value"
          dotLabelYOffset={-12}
          colors="paired"
          colorBy="key"
          fillOpacity={0.1}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          isInteractive={true}
          legends={[
            {
              anchor: "top-left",
              direction: "column",
              translateX: -100,
              translateY: -40,
              itemWidth: 60,
              itemHeight: 20,
              symbolSize: 12,
              symbolShape: "circle"
            }
          ]}
        />
      </React.Fragment>
    );
  }
}
export default RadarChart;
