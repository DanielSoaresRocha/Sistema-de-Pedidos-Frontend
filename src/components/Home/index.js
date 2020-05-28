import React, { useState } from 'react';

import Header from '../Header'
import SideDrawer from '../SideDrawer'
import BackDrop from '../BackDrop'

import './styles.css'
function Home (props) {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

    function drawerToggleClickHandler () {
        setSideDrawerOpen(!sideDrawerOpen)
    }

    let backDrop

    if (sideDrawerOpen) {
        backDrop = <BackDrop click={drawerToggleClickHandler} />
    }
    return (
        <div className="App">
            <Header drawerClickHandler={drawerToggleClickHandler} name={props.name} />
            <SideDrawer show={sideDrawerOpen} />
            {backDrop}
            {props.children}
        </div>
    );
}

export default Home;