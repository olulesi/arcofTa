import React from 'react'
import Journey from '../images/journey2.mp4'
import 'boxicons';

function AboutUs() {

    const videoElement = React.useRef(null)
    const [playing, setPlaying] = React.useState(false);
    const [muted, setMuted] = React.useState(true);

    const togglePlay = React.useCallback(
        event => {
            event.preventDefault();
            setPlaying(!playing);
            console.log(playing)
        },
        [playing]
    );

    const toggleMute = React.useCallback(
        event => {
            event.preventDefault();
            setMuted(!muted);
            console.log("is it muted:" + muted)
        },
        [muted]
    );

    React.useEffect(() => {
        playing
            ? videoElement.current.play()
            : videoElement.current.pause();
    }, [playing, videoElement]);

    React.useEffect(() => {
        muted
            ? (videoElement.current.muted = true)
            : (videoElement.current.muted = false);
    }, [muted, videoElement]);

    return (
        <>
            <div className='banner centre-container' id='banner'>
                <div className="video-wrapper">
                    <video
                        src={Journey}
                        ref={videoElement}
                        // onTimeUpdate={handleOnTimeUpdate}
                        muted="muted"
                        onClick={togglePlay}
                        autoPlay=""
                    />
                    <div className="controls">
                        <div className="actions">
                            <button className="togglePlay-container" onClick={togglePlay}>
                                {!playing ? (
                                    <box-icon name="play" className="bx bx-play"></box-icon>
                                ) : (
                                    <box-icon name="pause" className="bx bx-pause"></box-icon>
                                )}
                            </button>
                        </div>

                    </div>
                    <button className="mute-btn" onClick={toggleMute}>
                        {!muted ? (
                            <box-icon name="volume-full" className="bx bxs-volume-full"></box-icon>
                        ) : (
                            <box-icon name="volume-mute" ></box-icon>
                        )}
                    </button>
                </div>
            </div>
        </>
    )
}
export default AboutUs