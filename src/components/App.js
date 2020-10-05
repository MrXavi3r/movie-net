import React, { Component } from "react";
import "../App.css";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import MovieList from './MovieList'

const apiKey = process.env.REACT_APP_API_KEY;
// const base_URL = 'https://api.themoviedb.org/3/movie';

class App extends Component {
  state = {
    movies: [],
    searchTerm: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          movies: [...data.results],
        });
      });
  };

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Searchbar 
        handleSubmit={this.handleSubmit} 
        handleChange={this.handleChange}
        />
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
