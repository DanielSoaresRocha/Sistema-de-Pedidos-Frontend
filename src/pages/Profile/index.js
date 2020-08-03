import React, { useState } from 'react';

import './styles.css'
import Home from '../../components/Home'
import Camera from '../../components/Camera'

import request from '../../utils/request'

function Profile () {
    const [takePicture, setTakePicture] = useState(true);
    const [camera, setCamera] = useState(false);

    function changeTakePicture () {
        setTakePicture(!takePicture)
    }

    return (
        <Home name={'Perfil'}>
            <div className='containerProcfile'>
                <img
                    id='imgProcfile'
                    src='https://static.vecteezy.com/system/resources/previews/000/512/610/non_2x/profile-glyph-black-icon-vector.jpg'
                    alt='Perfil'
                />
                <h1>{request.getClient().nome}</h1>
                <span>{localStorage.getItem('email')}</span>


                <div className='changeProcfile'>
                    <span>Enviar imagem de perfil</span>
                    <button onClick={() => setCamera(!camera)}>Camera</button>
                    <button>Arquivo</button>
                </div>


                {camera ? (
                    <>
                        <div className='containerCamera'>
                            <Camera takePicture={takePicture} changeTakePicture={changeTakePicture} />

                            {takePicture === true
                                ?
                                <button
                                    className='cancelPicture'
                                    onClick={() => setCamera(!camera)}>Cancelar</button>
                                :
                                (
                                    <button
                                        className='takePicture'
                                        onClick={changeTakePicture}>Tirar outra foto</button>
                                )}
                        </div>
                    </>
                ) :
                    (
                        <div> </div>
                    )}


            </div>
            {/*

            {takePicture === true
                ?
                <div> </div>
                :
                <button class='takePicture' onClick={changeTakePicture}>Tirar outra foto</button>
            }
            */}
        </Home>
    );
}

export default Profile;