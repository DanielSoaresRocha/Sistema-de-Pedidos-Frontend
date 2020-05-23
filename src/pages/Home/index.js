import React, { useState } from 'react';

import Header from '../../components/Header'
import SideDrawer from '../../components/SideDrawer'
import BackDrop from '../../components/BackDrop'

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
            <Header drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={sideDrawerOpen} />
            {backDrop}
            {props.children}
        </div>
    );
}

export default Home;