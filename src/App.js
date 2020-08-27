import React, { useState } from 'react';
import Head from './Head';
import Lower from './Lower';

function App() {
  const [lowerDisplay, setLowerDisplay] = useState('Main');

  function changeLower(e) {
    setLowerDisplay(e.target.name);
  }

  return (
    <div>
      <Head handleClick={changeLower} />
      <Lower choice={lowerDisplay} />
    </div>
  );
}

export default App;
