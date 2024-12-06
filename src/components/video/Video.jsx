import React from 'react'
import playBtn from '../../assets/play-circle.png'
import video from '../../assets/Rectangle 132 (8).png'
import "./Video.css"

const Video = () => {
  return (
    <div className='video'>
        <img src={playBtn} alt="playBtn" className='play-btn'/>
        <img src={video} alt="Video" className="video-img" />

    </div>
  )
}

export default Video