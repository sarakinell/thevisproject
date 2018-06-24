import React from "react";
import "./index.css";
import RadarChart from "../../components/radarchart";
import SCBData from "../../assets/data/SCBData";

class Engagement extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="post-container">
          <div className="graph-wrapper">
            <RadarChart />
            <p className="post imagetext">
              Men in rural areas and women in cities are more involved in
              political matters. The data indicate the percentage of engaged
              individuals in each group. Men and women are respectively divided
              into citizens in large cities and suburb counties, and all
              remaining, more rural counties. Source:{" "}
              <a href="https://www.statistikdatabasen.scb.se/pxweb/sv/ssd/START__LE__LE0101__LE0101M/LE0101M06B/table/tableViewLayout1/?rxid=15929fcf-a58e-4098-8776-2fd3fe21c2f0 ">
                Statistics Sweden (Statistiska Centralbyrån)
              </a>{" "}
              (May, 2018).
            </p>
          </div>
          <div className="text-wrapper">
            <div className="header-wrapper">
              <h2 className="post title">Political engagement</h2>
              <h3 className="post subtitle">
                Whereas men living in rural areas consider themselves as active
                in political parties, women in cities are the most frequent
                meeting participants
              </h3>
            </div>
            <p className="post text">
              Geographical distances have traditionally opposed challenges for
              most of our everyday activies, such as trade, relationships, and
              political communication. Back in the days, it may have been
              difficult for a politician to reach out to all target groups,
              especially in Sweden, the{" "}
              <a href="https://en.wikipedia.org/wiki/Sweden">
                third largest country in Europe
              </a>. Today, we have a vast number of available resources to share
              our ideologic views, as individuals almost to as high of an extent
              as the politicians. But does this improve the communication
              between people and the decision-makers?<br /> <br />A study on{" "}
              <a href="https://www.gu.se/english/research/publication?publicationId=237746">
                social media use and political participation
              </a>{" "}
              suggest that the increased information flow from new medias not
              necessarily makes us more engaged in political matters. Rather
              contrary, the study found that the gap, between the communication
              consumed by "news-seekers" and "news-avoiders", actually
              increased. This finding was affecting the participation level and
              engagement in the voting on both a first-order (national), and
              second-order (EU) level. <br />
              <br />The radar chart above illustrates the percentage of people
              being active in a political party, having participated in a
              meeting with a political party the last year, and the ones being
              members of a political party. The{" "}
              <a href="https://www.statistikdatabasen.scb.se/pxweb/sv/ssd/START__LE__LE0101__LE0101M/LE0101M06B/?rxid=15929fcf-a58e-4098-8776-2fd3fe21c2f0">
                {" "}
                full survey
              </a>{" "}
              also covered four additional aspects of engagement; participation
              in political discussions, no participation in political
              discussions, submitting appeal against governmental decisions, and
              not being able to submit an appeal against governmental decisions.
              The data shows several interesting aspects, for example the big
              difference between men living in cities and in more rural areas.
              The first group is least likely to be active in (0.9%), or to be a
              member of (4.4%), a political party. The latter group, living on
              the country side, however, has the highest percentage of all four
              categories both when it comes to active involvement and membership
              holding.
            </p>
            <SCBData
              text="Engagement data from previous elections (see browser console)"
              url="https://api.scb.se/OV0104/v1/doris/en/ssd/START/ME/ME0105/ME0105C/ME0105T04"
            />
            <p className="post text">
              The engagement data seen in the browser console (fetched from the{" "}
              <a href="https://www.scb.se/en/">Statistics Sweden</a> API), is
              listing all historical political engagement levels recorded. They
              currently date back four elections, and show and increase in
              participation from 80.9% to 87% between 2002 and 2014. If this
              linear trend continues, we should see a participation of over 88%
              in this upcoming election in September 2018. If the same increase
              will continue, we should see an (unlikely but theoretical) 100%
              participation rate in 7.6 years, which then would be demonstrated
              in two elections from now.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Engagement;
