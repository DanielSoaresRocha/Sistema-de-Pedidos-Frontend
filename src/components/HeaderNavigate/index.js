import React from 'react';

import { BsArrowLeftShort } from "react-icons/bs";

import './styles.css'

function HeaderNavigate (props) {
    return (
        <>
            <header>
                <div className="back" onClick={props.navigate}>
                    <BsArrowLeftShort size={50} color="000" />
                    <h1>{props.name}</h1>
                </div>
            </header>
            {props.children}
        </>
    );
}

export default HeaderNavigate;