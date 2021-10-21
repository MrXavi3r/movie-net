import React, { Component } from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import {MovieList} from './MovieList'

const apiKey = process.env.REACT_APP_API_KEY;

interface iState {
  movies: {
    poster_path: string 
    adult: boolean
    overview: string
    release_date: string
    genre_ids: number[]
    id: number
    original_title: string
    original_language: string
    title: string
    backdrop_path: string
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
  }[],
  searchTerm: string
}

class App extends Component {
  state: iState = {
    movies: [],
    searchTerm: ""
  };

  handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: [...data.results],
        });
      });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
