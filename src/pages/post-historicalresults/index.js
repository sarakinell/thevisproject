import React from "react";
import LineChart from "../../components/linechart";

class HistoricalResults extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="post-container">
          <div className="graph-wrapper">
            <LineChart />
            <p className="post imagetext">
              Number of votes from the last national election in 2014. The
              number of votes for the eight largest political parties,
              categorised into the voting areas of Sweden's five largest cities,
              are graphically presented. Source:{" "}
              <a href="http://www.statistikdatabasen.scb.se/pxweb/sv/ssd/START__ME__ME0104__ME0104C/ME0104T3/?rxid=15929fcf-a58e-4098-8776-2fd3fe21c2f0">
                Statistics Sweden (Statistiska Centralbyrån)
              </a>{" "}
              (May, 2018).
            </p>
          </div>
          <div className="text-wrapper">
            <div className="header-wrapper">
              <h2 className="post title">
                The right-wing Stockholm and left-wing Gothenburg
              </h2>
              <h3 className="post subtitle">
                Is the long-gone prejudice for the two largest cities in the
                country actually holding some truth?
              </h3>
            </div>
            <p className="post text">
              The Social Democrats is{" "}
              <a href="http://socialdemokraternagoteborg.se/">self-claimed</a>{" "}
              to be the "forward-looking party in Gothenburg". "We love
              Gothenburg", they write in capital letters and iconography all
              over their red homepage. In the second largest city of Sweden,
              with approximately{" "}
              <a href="http://international.goteborg.se/facts-figures">
                533 000 citizens
              </a>, the four main focus areas for the S party are the following:
              <br />
            </p>
            <ul>
              <li>Safety</li>
              <li>Welfare</li>
              <li>Housing</li>
              <li>Integration</li>
            </ul>
            <p className="post text">
              The Social Democrats does not have a one-way stream of love
              towards "Göteborgarna", as the citizens of Gothenburg are called
              in Swedish – the adoration seems to be mutual. But despite the
              rumours of Gothenburg solely comprising Social Democrats
              supporters, the city has close to a 1:1 relationship between their
              votes for the S and M parties. <br />
              <br />The Moderate Party have during the last few years worked on
              a rebranding of their party, now named "The New Moderate Party".
              Their <a href="https://moderaterna.se/stockholm">webpage</a> for
              the Stockholm region is centered around a lit up horizon shot of
              the Swedish capital, and a distinct button with a call to action
              to become a member. The orange circle, leading the user to
              membership details, is accompanied by two women;{" "}
              <a href="https://moderaterna.se/stockholm/anna-konig-jerlmyr">
                Anna König Jelmyr
              </a>{" "}
              and{" "}
              <a href="https://moderaterna.se/stockholm/irene-svenonius">
                Irene Svenonius
              </a>. The main focus areas for the Moderate Party in Stockholm are
              six and listed below:
            </p>
            <ul>
              <li>Safety</li>
              <li>Housing</li>
              <li>Education</li>
              <li>Social care</li>
              <li>Employment</li>
              <li>Transportation</li>
            </ul>

            <p className="post text">
              In the last election regarding the{" "}
              <a href="/blog/euseats">
                representation of the Swedish parties in the European Union
              </a>, the Swedish Social Democrats was given almost twice as many
              seats as the Moderate Party (24 vs 14 mandates). Normally, this is
              somewhat similar to the national voting for the Swedish Riksdag.
              With this fact in mind, it is interesting to observe the voting
              outcome from the inhabitants of Stockholm, who obviously favoured
              the Moderate Party in the national election in 2014.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HistoricalResults;
