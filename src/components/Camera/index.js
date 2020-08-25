// código fonte em: https://www.npmjs.com/package/react-html5-camera-photo

import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import ImagePreview from './ImagePreview';

function CameraComponent ({ takePicture, changeTakePicture }) {
    const [dataUri, setDataUri] = useState('');

    function handleTakePhotoAnimationDone (dataUri) {
        console.log('takePhoto');
        setDataUri(dataUri);
        changeTakePicture(dataUri)
    }

    const isFullscreen = false;
    return (
        <div>
            {
                takePicture === true
                    ? <Camera onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
                        isFullscreen={isFullscreen}
                        idealResolution={{ width: 640, height: 400 }}
                    />
                    :
                    <ImagePreview dataUri={dataUri}
                        isFullscreen={isFullscreen}
                    />
            }
        </div>
    );
}

export default CameraComponent;