import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Home from "./components/Home";
import "./App.css";
import Search from "./components/search";
import Box from "./components/box";
import orange from "./orange_b.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MC from "./resLogos/McDonalds-logo.png";
import BK from "./resLogos/BurgerKing.png";
import Chipotle from "./resLogos/Chipotle.png";
import Panera from "./resLogos/Panera.png";
import Subway from "./resLogos/Subway.png";
import CF from "./resLogos/Chick-fil-A.png";
import Wendys from "./resLogos/Wendys.png";
import TB from "./resLogos/TacoBell.png";
import Arbys from "./resLogos/Arbys.png";
import Har from "./resLogos/Hardees.png";
import FG from "./resLogos/FiveGuys.png";
import IN from "./resLogos/InNOut.png";
import Sonic from "./resLogos/Sonic.svg";
import Panda from "./resLogos/PandaExpress.png";
import CK from "./resLogos/CookOut.png";

class App extends Component {
  //   state = {
  //     counters: [
  //       { id: 1, value: 2 },
  //       { id: 2, value: 0 },
  //       { id: 3, value: 0 },
  //       { id: 4, value: 0 },
  //     ],
  //   };

  //   handleIncrement = (counter) => {
  //     const counters = [...this.state.counters]; //clones
  //     const index = counters.indexOf(counter);
  //     counters[index] = { ...counter };
  //     counters[index].value++;
  //     this.setState({ counters });
  //   };

  //   handleReset = () => {
  //     const counters = this.state.counters.map((c) => {
  //       c.value = 0;
  //       return c;
  //     });
  //     this.setState({ counters });
  //   };

  //   handleDelete = (counterId) => {
  //     const counters = this.state.counters.filter((c) => c.id !== counterId);
  //     this.setState({ counters });
  //   };

  state = {
    restaurants: [
      { id: "McDonalds", link: MC },
      { id: "Burger King", link: BK },
      { id: "Chipotle", link: Chipotle },
      { id: "Panera", link: Panera },
      { id: "Subway", link: Subway },
      { id: "Chick-fil-A", link: CF },
      { id: "Wendys", link: Wendys },
      { id: "Taco Bell", link: TB },
      { id: "Arbys", link: Arbys },
      { id: "Hardees", link: Har },
      { id: "Five Guys", link: FG },
      { id: "In-N-Out", link: IN },
      { id: "Sonic", link: Sonic },
      { id: "Panda Express", link: Panda },
      { id: "Cookout", link: CK },
    ],
    currentRes: null,
    totalCal: 0,
  };

  handlePress = (resId) => {
    const currentRes = resId;
    this.setState({ currentRes });
  };

  handleAdd = (calories) => {
    const totalCal = this.state.totalCal + calories;
    this.setState({ totalCal });
  };

  render() {
    return (
      <div className="container2">
        <React.Fragment>
          <NavBar cals={this.state.totalCal} />

          <Router>
            <Switch>
              <Route exact path="/">
                <Home
                  restaurants={this.state.restaurants}
                  onPress={this.handlePress}
                />
              </Route>
              <Route path="/search">
                <Search
                  restaurant={this.state.currentRes}
                  onAdd={this.handleAdd}
                />
              </Route>
            </Switch>
          </Router>

          {/* <Box />

          <main className="container">
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
            />
          </main> */}
        </React.Fragment>{" "}
      </div>
    );
  }
}

export default App;
