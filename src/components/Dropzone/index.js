import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'

import './styles.css'

function Dropzone ({ onFileUploaded }) {
    const [selectFileUrl, setSelectFileUrl] = useState('')

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]

        const fileUrl = URL.createObjectURL(file)
        setSelectFileUrl(fileUrl)
        onFileUploaded(fileUrl)
    }, [onFileUploaded])

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*'
    })

    return (
        <div className="dropzone"{...getRootProps()}>
            <input {...getInputProps()} accept='image/*' />

            {selectFileUrl
                ?
                <img src={selectFileUrl} alt='Point' />
                : (
                    <p>
                        <FiUpload />
                Sua foto de perfil
                    </p>

                )}
        </div>
    )
}

export default Dropzone