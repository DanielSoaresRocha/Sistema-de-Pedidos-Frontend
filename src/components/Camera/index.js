import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import ImagePreview from './ImagePreview'; // source code : ./src/demo/AppWithImagePreview/ImagePreview

function CameraComponent ({ takePicture, changeTakePicture }) {
    const [dataUri, setDataUri] = useState('');

    function handleTakePhotoAnimationDone (dataUri) {
        console.log('takePhoto');
        setDataUri(dataUri);
        changeTakePicture()
    }

    const isFullscreen = false;
    return (
        <div>
            {
                takePicture === true
                    ? <Camera onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
                        isFullscreen={isFullscreen}
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