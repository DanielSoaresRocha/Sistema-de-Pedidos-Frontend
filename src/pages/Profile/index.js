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
            <div className='containerProcfile'>
                <img
                    src='https://static.vecteezy.com/system/resources/previews/000/512/610/non_2x/profile-glyph-black-icon-vector.jpg'
                    alt='Perfil'
                />
                <h1>Maria Silva</h1>
                <span>denk@ufrn.edu.br</span>


                <div className='changeProcfile'>
                    <span>Enviar imagem de perfil</span>
                    <button>Camera</button>
                    <button>Arquivo</button>
                </div>
            </div>

            {/*
            <Camera takePicture={takePicture} changeTakePicture={changeTakePicture} />

            {takePicture === true
                ?
                <div> </div>
                :
                <button class='takePicture' onClick={changeTakePicture}>Tirar outra foto</button>
            }*/}
        </Home>
    );
}

export default Profile;