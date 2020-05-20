import React, { useState } from 'react';

import Header from './components/Header'
import SideDrawer from './components/SideDrawer'

import './app.css'
function App () {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  function drawerToggleClickHandler () {
    setSideDrawerOpen(!sideDrawerOpen)
  }
  let sideDrawer

  if (sideDrawerOpen) {
    sideDrawer = <SideDrawer />
  }
  return (
    <div className="App">
      <Header drawerClickHandler={drawerToggleClickHandler} />
      {sideDrawer}
    </div>
  );
}

export default App;
