import React from 'react';

function Buttonbar(props) {
  return (
    <div>
      <button type="button" name="Main" onClick={props.handleClick}>
        Main
      </button>
      <button type="button" name="Menu" onClick={props.handleClick}>
        Menu
      </button>
      <button type="button" name="Contact" onClick={props.handleClick}>
        Contact
      </button>
      <br />
      <button type="button" name="NewItem" onClick={props.handleClick}>
        Add new menu item
      </button>
    </div>
  );
}

export default Buttonbar;
