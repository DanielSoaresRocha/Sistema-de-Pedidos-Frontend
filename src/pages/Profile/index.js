import React, { useState } from 'react';

import './styles.css'
import Home from '../../components/Home'
import Camera from '../../components/Camera'
import Dropzone from '../../components/Dropzone'

import request from '../../utils/request'

function Profile () {
    const [takePicture, setTakePicture] = useState(true);
    const [camera, setCamera] = useState(false);
    const [photo, setPhoto] = useState(false)
    // eslint-disable-next-line
    const [selectedFile, setSelectedFile] = useState('https://static.vecteezy.com/system/resources/previews/000/512/610/non_2x/profile-glyph-black-icon-vector.jpg')
    
    function changeTakePicture (dataUri) {
        setTakePicture(!takePicture)
        console.log(`tirar outra foto ${takePicture}`)
        setSelectedFile(dataUri)
    }

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
                                        onClick={() => setCamera(!camera)}>Cancelar</button>
                                    :
                                    (
                                        <>
                                            <button
                                                className='takePicture'
                                                onClick={() => changeTakePicture()}>Tirar outra foto</button>
                                            <button
                                                className='savePicture'
                                                onClick={() => setCamera(!camera)}>Salvar foto</button>
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
                        <Dropzone onFileUploaded={setSelectedFile} />
                        <div className='groupButtons'>
                            <button
                                className='cancelPicture'
                                onClick={() => setPhoto(!photo)}>Cancelar</button>
                            {
                                selectedFile ?
                                    <button
                                        className='savePicture'
                                        onClick={() => {
                                            setPhoto(!photo)
                                            setSelectedFile(selectedFile)
                                        }
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