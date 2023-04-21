import React from 'react'
import Journey from '../images/journey2.mp4'
// import VideoPlayer from './VideoPlayer'
import 'boxicons';



function AboutUs() {
    const videoElement = React.useRef(null)
    // const {
    //     playing,
    //     togglePlay,
    //     // handleOnTimeUpdate,
    //     // handleVideoProgress,
    //     // toggleMute
    // } = VideoPlayer(videoElement);

    const [playing, setPlaying] = React.useState(false);

    const togglePlay = React.useCallback(
          event => {
            event.preventDefault();
            setPlaying(!playing);
            console.log(playing)
          },
          [playing]
        );

    React.useEffect(() => {
        playing
          ? videoElement.current.play()
          : videoElement.current.pause();
      }, [playing, videoElement]);

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
                            <button onClick={togglePlay}>
                                {playing  ? (
                                    <box-icon name="play" className="bx bx-play"></box-icon>
                                ) : (
                                    <box-icon name="pause" className="bx bx-pause"></box-icon>
                                )}
                            </button>
                        </div>
                        {/* <input
                            type="range"
                            min="0"
                            max="100"
                            value={playerState.progress}
                            onChange={(e) => handleVideoProgress(e)}
                        />
                        <button className="mute-btn" onClick={toggleMute}>
                            {!playerState.isMuted ? (
                                <box-icon name="volume-full" className="bx bxs-volume-full"></box-icon>
                            ) : (
                                <box-icon name="volume-mute" ></box-icon>
                            )}
                        </button> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUs