import React from 'react';
import ButtonBar from './Components/ButtonBar';

function Head(props) {
  return (
    <div className="head">
      <h1>Restaurant</h1>
      <ButtonBar handleClick={props.handleClick} />
    </div>
  );
}

export default Head;
