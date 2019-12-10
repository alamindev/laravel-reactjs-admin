import React from 'react'
import Avatar from 'react-avatar-edit'
const PhotoUpload = (props) => {
    return (
        <div className="block-body">
            <div className="row">
                <div className="col-lg-8">
                    <Avatar
                        width={props.width}
                        width={props.height}
                        onCrop={props.onCrop}
                        onClose={props.onClose}
                        onBeforeFileLoad={props.onBeforeFileLoad}
                        src={props.src}
                    />
                </div>
                <div className="col-lg-4">
                    <div className="image__main">
                        <img src={props.preview} alt="Preview" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoUpload
