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
    setMenu((prevMenu) => prevMenu.concat(newItem));
    console.log(menu);
  }

  return (
    <div>
      <Head handleClick={changeLower} />
      <Lower choice={lowerDisplay} add={addItem} items={menu} />
    </div>
  );
}

export default App;
