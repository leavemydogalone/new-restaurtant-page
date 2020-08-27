import React, { useState } from 'react';
import Head from './Head';
import Lower from './Lower';
import menuItems from './menuItems';

function App() {
  const [lowerDisplay, setLowerDisplay] = useState('MenuForm');
  const [menu, setMenu] = useState(menuItems);

  function changeLower(e) {
    setLowerDisplay(e.target.name);
  }

  function addItem(newItem) {
    setMenu((prevMenu) => {
      return {
        ...prevMenu,
        newItem,
      };
    });
  }

  return (
    <div>
      <Head handleClick={changeLower} />
      <Lower choice={lowerDisplay} add={addItem} />
    </div>
  );
}

export default App;
