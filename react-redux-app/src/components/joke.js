import React from 'react';

const Joke = props => {
  return <p>{props.data.setup.text}</p>;
};

export default Joke;
