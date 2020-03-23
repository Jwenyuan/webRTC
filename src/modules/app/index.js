import React from 'react';
import './style.css';

export default class App extends React.Component {
    
    componentDidMount() {
        navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'envirent' // 给个后置呗
            },
            audio: true,
        })
            .then(this.gotLocalMediaStream)
            .catch(this.handleLocalMediaStreamError);
    }
    videoRef = null;

    /**
     * @desc    获取用户权限成功
     * @param   {Object}    mediaStream     音视频轨
     */
    gotLocalMediaStream = (mediaStream) => {
        console.log('mediaStream', mediaStream);
        this.videoRef.srcObject = mediaStream;
    }
    handleLocalMediaStreamError = (error) => {
        console.log('navigator.getUserMedia error: ', error);
    }

    render() {
        return (
            <div className="app-page">
                video
                <video
                    className="video-content"
                    ref={(video) => {
                        this.videoRef = video;
                    }}
                    autoPlay
                    playsInline
                />
            </div>
        )
    }
}
