import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchJokes } from './actions';
import './App.css'

class App extends Component {
  state = {
    joke: ''
  }

  componentDidMount() {
    this.props.fetchJokes();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Programming Jokes</h1>
          <h2>Warning! none programmers may ! understand some || any of the presented jokes</h2>
          <div>
            {this.props.jokes.map(joke => (
              <p>{joke} </p>
            ))}
          </div>
        </header>
      </div>
    );
  }  
}

const mapStateToProps = state => {
  return {
    jokes: state.jokes,
    isFetching: state.isFetching,
  };
};

export default connect (mapStateToProps, { fetchJokes })(App);
