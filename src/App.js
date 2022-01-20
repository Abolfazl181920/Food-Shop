import React from 'react';

import Panel from "./components/Panel/Panel";
import Header from './components/Header/Header';
import DateTime from './components/Header/DateTime';

const App = () => {
  return (
    <div className="App">
      <Panel />
      <DateTime />
      <Header />
    </div>
  );
}

export default App;