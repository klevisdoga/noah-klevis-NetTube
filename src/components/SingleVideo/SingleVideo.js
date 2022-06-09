import React from 'react'
import pH from '../../assets/images/video-PH.jpeg';
import './SingleVideo.scss'

export default function SingleVideo() {
  return (
    <div className='movie'>
        <img src={pH} alt='img' className='movie__thumbnail'/>
        <img src={pH} alt='img' className='movie__thumbnail'/>
        <img src={pH} alt='img' className='movie__thumbnail'/>
    </div>
  )
}
