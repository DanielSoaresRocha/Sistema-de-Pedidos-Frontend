import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export const ImagePreview = ({ dataUri, isFullscreen }) => {
    let classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : '';

    return (
        <div className={'demo-image-preview ' + classNameFullscreen}>
            <img src={dataUri} alt="preview" />
        </div>
    );
};

ImagePreview.propTypes = {
    dataUri: PropTypes.string,
    isFullscreen: PropTypes.bool
};

export default ImagePreview;