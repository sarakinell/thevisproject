import React from "react";
import BarChart from "../../components/barchart";

class PollResults extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="post-container">
          <div className="graph-wrapper">
            <BarChart />
            <p className="post imagetext">
              The latest official, political gallup poll was carried out in May,
              2018. The Swedish Social Democratic Party, S, received the
              strongest support, followed by the Moderate Party, M, and the
              Sweden Democrats, SD. The question answered by the survey
              participants was "How would you vote if the election was today?".
              Source:{" "}
              <a href="https://www.statistikdatabasen.scb.se/pxweb/sv/ssd/START__ME__ME0201__ME0201A/Vid11/?rxid=15929fcf-a58e-4098-8776-2fd3fe21c2f0">
                Statistics Sweden (Statistiska Centralbyrån)
              </a>{" "}
              (May, 2018).
            </p>
          </div>
          <div className="text-wrapper">
            <div className="header-wrapper">
              <h2 className="post title">
                How the Swedes would vote <i>today</i>
              </h2>
              <h3 className="post subtitle">
                Election outcome and ideologies represented in the latest
                hypothetical vote
              </h3>
            </div>
            <p className="post text">
              An{" "}
              <a href="https://en.wikipedia.org/wiki/List_of_political_parties_in_Sweden">
                overview of political parties in Sweden
              </a>{" "}
              reveal that Swedish Social Democrats has more than 89 000 members,
              which is almost twice as many as the Moderate Party (45 500).
              Their upcoming opponent, the Sweden Democrats, is a growing
              community of currently 28 300 members.<br />
              <br />
              According to the poll graphically illustrated above, almost 27% of
              the Swedes would vote for the current biggest party, the Swedish
              Social Democratic Party. Their values are strongly influenced by{" "}
              <a href="https://en.wikipedia.org/wiki/Social_democracy">
                social democracy
              </a>, the support of economic and social interventions in order to
              create justice in society.<br />
              <br />
              One out of five citizens find the liberal conservative ideology of
              the Moderate Party most appealing. In contrast to the Swedish
              Social Democratic Party,{" "}
              <a href="https://en.wikipedia.org/wiki/Liberal_conservatism">
                liberal conservatism
              </a>{" "}
              is promoting minimal government intervention for the economy to
              prosper. Instead, the policies are centered around promotion of
              free market participation for all individuals.<br />
              <br />
              More than 18% of the respondents would vote for the Swedish
              Democrats if the election was today. The party aims to achieve{" "}
              <a href="https://en.wikipedia.org/wiki/Social_conservatism">
                social conservatism
              </a>{" "}
              and nationalism. Social conservatism is traditionally associated
              with sceptics of social change. Instead of change, the ideology
              argues for kept traditional relationships and social structures
              (such as family life, sexual relations and patriotism).{" "}
              <a href="https://en.wikipedia.org/wiki/Nationalism">
                Nationalism
              </a>{" "}
              is an ideology for national promotion, in everything related to
              political, social and economical issues. Promoters of nationalism
              may, for example, believe that citizenship should be limited to
              one ethnic. Historically, nationalists have often received
              increased support when people perceive an inconsistency between
              their own definition of social order and the environment they
              experience.<br />
              <br />
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PollResults;
