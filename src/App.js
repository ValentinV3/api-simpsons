import React from "react";
import axios from "axios";
import "./App.css";
import DisplayQuote from "./components/DisplayQuote";

const sampleQuote = {
  quote: "My eyes! The goggles do nothing!",
  character: "Rainier Wolfcastle",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRainierWolfcastle.png?1497567511035",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: sampleQuote,
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        this.setState({
          quotes: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <DisplayQuote quotes={this.state.quotes} />
        <button type="button" onClick={this.getQuote}>
          Get quote
        </button>
      </div>
    );
  }
}

export default App;
