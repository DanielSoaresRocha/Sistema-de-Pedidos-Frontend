import React, { useState } from 'react';

import Header from '../../components/Header'
import SideDrawer from '../../components/SideDrawer'
import BackDrop from '../../components/BackDrop'

import './styles.css'
function Home () {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

    function drawerToggleClickHandler () {
        setSideDrawerOpen(!sideDrawerOpen)
    }

    function backDropClickHandler () {
        setSideDrawerOpen(!sideDrawerOpen)
    }
    let backDrop

    if (sideDrawerOpen) {
        backDrop = <BackDrop click={backDropClickHandler} />
    }
    return (
        <div className="App">
            <Header drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={sideDrawerOpen} />
            {backDrop}
        </div>
    );
}

export default Home;