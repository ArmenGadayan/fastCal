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
      { id: "Chipotle", link: MC },
      { id: "Panera", link: MC },
      { id: "Subway", link: MC },
      { id: "Chick-fil-A", link: MC },
      { id: "Wendys", link: MC },
      { id: "Taco Bell", link: MC },
      { id: "Arbys", link: MC },
      { id: "Hardees", link: MC },
      { id: "Five Guys", link: MC },
      { id: "In-N-Out", link: MC },
      { id: "Sonic", link: MC },
      { id: "Panda Express", link: MC },
      { id: "Cookout", link: MC },
    ],
    currentRes: null,
  };

  handlePress = (resId) => {
    const currentRes = resId;
    this.setState({ currentRes });
  };

  render() {
    return (
      <div className="container2">
        <React.Fragment>
          {/* <NavBar
            totalCounters={
              this.state.counters.filter((c) => c.value > 0).length
            }
          /> */}

          <Router>
            <Switch>
              <Route exact path="/">
                <Home
                  restaurants={this.state.restaurants}
                  onPress={this.handlePress}
                />
              </Route>
              <Route path="/search">
                <Search restaurant={this.state.currentRes} />
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
