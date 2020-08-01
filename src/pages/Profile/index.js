import React, { useState } from 'react';

import './styles.css'
import Home from '../../components/Home'
import Camera from '../../components/Camera'

function Profile () {
    const [takePicture, setTakePicture] = useState(true);

    function changeTakePicture () {
        setTakePicture(!takePicture)
    }

    return (
        <Home name={'Perfil'}>
            <Camera takePicture={takePicture} changeTakePicture={changeTakePicture} />

            <button onClick={changeTakePicture}>Tirar outra foto</button>
        </Home>
    );
}

export default Profile;