import React from "react";
import PieChart from "../../components/piechart";

class EUSeats extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="post-container">
          <div className="graph-wrapper">
            <PieChart />
            <p className="post imagetext">
              The Social Democrates hold the largest number of seats in the
              European Union. From the national vote in 2014, the main eight
              parties of Sweden were accompanied by the Feministic Initiative
              (FI), and the Pirate Party (P). Source:{" "}
              <a href="https://www.statistikdatabasen.scb.se/pxweb/sv/ssd/START__ME__ME0109__ME0109A/EUvalA/table/tableViewLayout1/?rxid=15929fcf-a58e-4098-8776-2fd3fe21c2f0 ">
                Statistics Sweden (Statistiska Centralbyrån)
              </a>{" "}
              (May, 2018).
            </p>
          </div>
          <div className="text-wrapper">
            <div className="header-wrapper">
              <h2 className="post title">
                The number of seats in the EU parliament reflect the election
                results
              </h2>
              <h3 className="post subtitle">
                Sweden is currently promoting socialism in the EU
              </h3>
            </div>
            <p className="post text">
              Sweden is a member of the European union{" "}
              <a href="https://europa.eu/european-union/about-eu/countries/member-countries/sweden_en">
                since 1995
              </a>. The nation has until now kept its own currency, but also
              expressed interest in adopting the euro – once it fulfils certain
              conditions. While a shared currency may facilitate international
              trade, through means such as a more stable and less costly
              currency trade, monetary policy also becomes more complex to
              influence and manage for a nation. In 1994, the{" "}
              <a href="https://en.wikipedia.org/wiki/Sweden_and_the_euro">
                Treaty of Maastricht
              </a>{" "}
              obliged members of the union to adopt a shared currency when they
              fulfil a number of defined criteria. The European Exchange Rate
              Mechanism (ERM II), is one of them, and Sweden is said to
              intentionally avoid adhering to its regulations. <br />
              <br />The EU budget is not claiming a purpose of redistributing
              wealth between the countries in the union, but rather to support
              all of the member countries' citizens. Sweden{" "}
              <a href="https://ec.europa.eu/budget/mycountry/SE/index_en.cfm">
                received
              </a>{" "}
              an amount of €1.7 billion from the EU in 2016. This may sound like
              an extraordinary high number, but when compared to the money
              Sweden{" "}
              <a href="https://ec.europa.eu/budget/mycountry/SE/index_en.cfm">
                contributed
              </a>{" "}
              to the union, €3.3 billion, the year clearly resulted in a
              financial loss. Important to keep in mind, however, are the
              intangible or qualitative benefits drawn from the participation in
              the union. <br />
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EUSeats;
