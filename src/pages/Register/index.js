import React from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'

import { BsArrowLeftShort } from "react-icons/bs";


function Register () {
    const history = useHistory()
    return (
        <div className="containerRegister">
            <header>
                <div className="back" onClick={() => history.push('/')}>
                    <BsArrowLeftShort size={50} color="000" />
                    <h1>SingUp</h1>
                </div>
            </header>
        </div>
    );
}

export default Register;