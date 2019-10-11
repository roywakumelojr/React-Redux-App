import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchJokes } from "../actions";

import Joke from "./Joke";

const JokeList = props => {
  useEffect(() => {
    props.fetchJokes();
  },[]);

  if (props.isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.jokeList.map(joke => (
        <Joke key={joke.id} joke={joke} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    jokeList: state.jokeList,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect (mapStateToProps, { fetchJokes })(JokeList);
