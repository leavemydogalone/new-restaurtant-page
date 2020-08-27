import React from 'react';
import Menu from './Menu';
import Main from './Main';
import Contact from './Contact';

function Lower(props) {
  const lower = props.choice;
  let choice;
  if (lower === 'Main') {
    choice = <Main />;
  } else if (lower === 'Menu') {
    choice = <Menu />;
  } else {
    choice = <Contact />;
  }

  return <div>{choice}</div>;
}

export default Lower;
