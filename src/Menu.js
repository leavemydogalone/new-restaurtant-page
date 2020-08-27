import React from 'react';
import menuItems from './menuItems';
import MenuItem from './Components/MenuItem';

function Menu() {
  const menuDisplay = menuItems.map((item) => (
    <MenuItem key={item.id} item={item} />
  ));

  return <div className="menu">{menuDisplay}</div>;
}

export default Menu;
