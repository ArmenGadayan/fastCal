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
    foodList: [],
  };

  handlePress = (resId) => {
    const currentRes = resId;
    this.setState({ currentRes });
  };

  handleAdd = (calories, name) => {
    const totalCal = this.state.totalCal + calories;
    const foodList = this.state.foodList;
    if (foodList.some((item) => item.name === name)) {
      foodList.find((item) => item.name === name).quantity += 1;
    } else foodList.push({ calories, name, quantity: 1 });
    this.setState({ totalCal, foodList });
  };

  handleDeleteItem = (item) => {
    // const foodList = this.state.foodList.filter((c) => c !== item);
    // const totalCal = this.state.totalCal - item.calories;
    // this.setState({ foodList, totalCal }) ;

    let foodList = this.state.foodList;
    const totalCal = this.state.totalCal - item.calories;
    const selectedItem = foodList.find((c) => c.name === item.name);
    if (selectedItem.quantity > 1) {
      selectedItem.quantity -= 1;
    } else foodList = foodList.filter((c) => c !== item);
    // else {
    //   let index = foodList.indexOf(item);
    //   if (index !== -1) {
    //     foodList.splice(index, 1);
    //   }

    this.setState({ totalCal, foodList });
  };

  handleAddItem = (name, calories) => {
    const foodList = this.state.foodList;
    const totalCal = this.state.totalCal + calories;
    foodList.find((item) => item.name === name).quantity += 1;
    this.setState({ foodList, totalCal });
  };

  handleReset = () => {
    const foodList = [];
    const totalCal = 0;
    this.setState({ foodList, totalCal });
  };

  render() {
    return (
      <div className="container2">
        <NavBar
          cals={this.state.totalCal}
          foodList={this.state.foodList}
          onDeleteItem={this.handleDeleteItem}
          onAddItem={this.handleAddItem}
          onReset={this.handleReset}
        />
        <div className="mainBox">
          <Router basename={process.env.PUBLIC_URL}>
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
        </div>
      </div>
    );
  }
}

export default App;
