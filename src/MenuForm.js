import React, { useState } from 'react';

function MenuForm(props) {
  const [pic, setPic] = useState('');
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [caption, setCaption] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: props.items.length + 1,
      pic: pic,
      name: name,
      cost: cost,
      caption: caption,
    };
    props.add(newItem);
  }
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
      <form name="MenuForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="pic"
          placeholder="Item Picture Url"
          value={pic}
          onChange={(event) => setPic(event.target.value)}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input
          type="text"
          name="cost"
          placeholder="Item Cost"
          value={cost}
          onChange={(event) => setCost(event.target.value)}
        />
        <br />
        <input
          type="text"
          name="caption"
          placeholder="Item Caption"
          value={caption}
          onChange={(event) => setCaption(event.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MenuForm;
