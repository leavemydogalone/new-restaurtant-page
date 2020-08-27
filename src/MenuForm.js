import React, { useState } from 'react';

function MenuForm(props) {
  const [pic, setPic] = useState('');
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [caption, setCaption] = useState('');

  function handleChange() {}
  return (
    <div
      style={{
        margin: 'auto',

        textAlign: 'center',
        height: 160,
        width: 190,
        backgroundColor: 'grey',
        fontSize: '30px',
      }}
    >
      <form name="MenuForm">
        <input
          type="text"
          name="pic"
          placeholder="Item Picture Url"
          value={caption}
          onChange={handleChange}
        />
        <br />
        <input type="text" name="name" placeholder="Item Name" />
        <br />
        <input type="text" name="cost" placeholder="Item Cost" />
        <br />
        <input type="text" name="caption" placeholder="Item Caption" />
        <br />
        <button type="button" onSubmit={console.log('hello')}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default MenuForm;
