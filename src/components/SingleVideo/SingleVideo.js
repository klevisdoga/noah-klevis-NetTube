import React from 'react'
import pH from '../../assets/images/video-PH.jpeg';
import './SingleVideo.scss'

export default function SingleVideo({ image }) {
  return (
    <div className='movie'>
        <img src={image} alt='img' className='movie__thumbnail'/>
    </div>
  )
}
