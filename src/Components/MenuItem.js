import React from 'react';

function MenuItem(props) {
  const { name, pic, price, caption } = props.item;
  return (
    <div className="menu-item">
      <img style={{ width: '100%', height: '50%' }} alt={name} src={pic} />
      <p className="name">{name}</p>
      <p className="price">{price}</p>
      <p>{caption}</p>
    </div>
  );
}

export default MenuItem;
