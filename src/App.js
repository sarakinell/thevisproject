import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/index.js";
import Footer from "./components/footer/index.js";
import Blog from "./pages/blog";
import About from "./pages/about";
import PollResults from "./pages/post-pollresults";
import HistoricalResults from "./pages/post-historicalresults";
import EUSeats from "./pages/post-euseats";
import Engagement from "./pages/post-engagement";
import Home from "./pages/home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <main className="main-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Blog} />
              <Route
                path="/blog/:blogpost"
                render={props => {
                  const { match } = props;
                  const {
                    params: { blogpost }
                  } = match;
                  if (blogpost == "historicalresults")
                    return <HistoricalResults />;
                  else if (blogpost == "euseats") return <EUSeats />;
                  else if (blogpost == "pollresults") return <PollResults />;
                  else if (blogpost == "engagement") return <Engagement />;
                }}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
