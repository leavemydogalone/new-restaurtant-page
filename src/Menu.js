import React from 'react';
import menuItems from './menuItems';
import MenuItem from './Components/MenuItem';

function Menu(props) {
  const menuDisplay = props.items.map((item) => (
    <MenuItem key={item.id} item={item} />
  ));

  return <div className="menu">{menuDisplay}</div>;
}

export default Menu;
