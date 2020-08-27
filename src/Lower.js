import React from 'react';
import Menu from './Menu';
import Main from './Main';
import Contact from './Contact';
import MenuForm from './MenuForm';

function Lower(props) {
  const lower = props.choice;
  let choice;
  if (lower === 'Main') {
    choice = <Main />;
  } else if (lower === 'Menu') {
    choice = <Menu items={props.items} />;
  } else if (lower === 'Contact') {
    choice = <Contact />;
  } else {
    choice = <MenuForm add={props.add} items={props.items} />;
  }

  return <div>{choice}</div>;
}

export default Lower;
