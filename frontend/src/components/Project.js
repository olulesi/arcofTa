import React from 'react'
import BOURBON from '../images/Arc1/BOURBON.mp4'
// import videos from '../components/FTGU/videos'

// import 'boxicons'

const useElementOnScreen = (options) => {
  const videoElement = React.useRef(null)

  const [isVisible, setIsVisible] = React.useState(false)
  const callbackFunction = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (videoElement.current) observer.observe(videoElement.current)

    return () => {
      if (videoElement.current) observer.unobserve(videoElement.current)
    }
  }, [videoElement, options])

  return [videoElement, isVisible]
}

function Project() {
  const [playing, setPlaying] = React.useState(false)
  const [muted, setMuted] = React.useState(true)
  const [paused, setPaused] = React.useState(false)
  // const [activeVideo, setActiveVideo] = React.useState(0)

  const [videoElement, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  })

  // const handleVideoChange = (e) => {
  //   const scrollY = e.target.scrollTop // Amount scrolled
  //   const newIndex = Math.min(
  //     Math.floor(scrollY / window.innerHeight),
  //     videos.length - 1
  //   )
  //   setActiveVideo(newIndex)
  // }

  const togglePlay = React.useCallback(
    (event) => {
      event.preventDefault()
      setPlaying(!playing)
      setPaused(!paused)
      console.log(playing)
    },
    [playing, paused]
  )

  const toggleMute = React.useCallback(
    (event) => {
      event.preventDefault()
      setMuted(!muted)
      console.log('is it muted:' + muted)
    },
    [muted]
  )

  React.useEffect(() => {
    isVisible && !paused ? setPlaying(true) : setPlaying(false)
  }, [isVisible, playing, paused])

  React.useEffect(() => {
    playing ? videoElement.current.play() : videoElement.current.pause()
  }, [playing, videoElement])

  React.useEffect(() => {
    muted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false)
  }, [muted, videoElement])

  return (
    <>
      <div className="banner centre-container video-container" id="banner">
        <div className="video-wrapper">
          <video
            src={BOURBON}
            ref={videoElement}
            muted="muted"
            onClick={togglePlay}
            autoPlay=""
            className="video-player"
          />
          <button className="togglePlay-container" onClick={togglePlay}>
            {!playing ? (
              <svg className="play-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
              </svg>
            ) : (
              <svg className="pause-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
              </svg>
            )}
          </button>
          <button className="mute-btn" onClick={toggleMute}>
            {!muted ? (
              <svg className="volume-high-icon" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
                />
              </svg>
            ) : (
              <svg className="volume-muted-icon" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="sockText-container">
          <h5 className="sock-title">BOURBON</h5>
          <p className="sock-description">
            A sock is neither thought about or seen, however, it aids us in the
            comfort of moving around in our daily lives. The "from the ground
            up" collection by arcofta represents the start of the journey, the
            preliminary layering that prepares you for the road aheads, an easy
            journey was never promised.
          </p>
        </div>
      </div>
    </>
  )
}
export default Project
