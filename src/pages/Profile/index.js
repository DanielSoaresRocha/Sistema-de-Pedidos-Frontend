import React, { useState, useEffect } from 'react';

import './styles.css'
import Home from '../../components/Home'
import Camera from '../../components/Camera'
import Dropzone from '../../components/Dropzone'

import request from '../../utils/request'
import { photoProfile } from '../../utils/photoProfile'

function Profile () {
    const [takePicture, setTakePicture] = useState(true);
    const [camera, setCamera] = useState(false);
    const [photo, setPhoto] = useState(false)

    const [selectedFile, setSelectedFile] = useState('')
    const [photoTemp, setPhotoTemp] = useState('')


    function changeTakePicture (dataUri) {
        setPhotoTemp(dataUri)
        setTakePicture(false)
    }

    function savePhoto () {
        setCamera(false)
        setPhoto(false)
        setTakePicture(false)

        photoProfile.setPhoto(photoTemp)
        setSelectedFile(photoProfile.getPhoto())
    }

    useEffect(() => {
        setSelectedFile(photoProfile.getPhoto())
    }, [])

    return (
        <Home name={'Perfil'}>
            <div className='containerProcfile'>
                <img
                    id='imgProcfile'
                    src={selectedFile}
                    alt='Perfil'
                />
                <h1>{request.getClient().nome}</h1>
                <span>{localStorage.getItem('email')}</span>


                <div className='changeProcfile'>
                    <span>Enviar imagem de perfil</span>
                    <button onClick={() => setCamera(!camera)}>Camera</button>
                    <button onClick={() => setPhoto(!photo)}>Arquivo</button>
                </div>


                {camera ? (
                    <>
                        <div className='containerCamera'>
                            <Camera takePicture={takePicture} changeTakePicture={changeTakePicture} />

                            <div className='groupButtons'>
                                {takePicture === true
                                    ?
                                    <button
                                        className='cancelPicture'
                                        onClick={() => setCamera(false)}>Cancelar</button>
                                    :
                                    (
                                        <>
                                            <button
                                                className='takePicture'
                                                onClick={() => setTakePicture(!takePicture)}>Tirar outra foto</button>
                                            <button
                                                className='savePicture'
                                                onClick={() => savePhoto()}>Salvar foto</button>
                                        </>
                                    )}
                            </div>
                        </div>
                    </>
                ) :
                    (
                        <div> </div>
                    )}

                {photo ?
                    <div className='containerCamera'>
                        <Dropzone onFileUploaded={changeTakePicture} />
                        <div className='groupButtons'>
                            <button
                                className='cancelPicture'
                                onClick={() => setPhoto(!photo)}>Cancelar</button>
                            {
                                selectedFile ?
                                    <button
                                        className='savePicture'
                                        onClick={() => { savePhoto() }
                                        }>Salvar</button>
                                    :
                                    <div></div>
                            }
                        </div>
                    </div>
                    :
                    <div></div>
                }
            </div>
        </Home>
    );
}

export default Profile;