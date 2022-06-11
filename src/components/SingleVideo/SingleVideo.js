import React from 'react'
import './SingleVideo.scss'

export default function SingleVideo({ image, id, handleClick }) {


  return (
      
      <img onClick={() => handleClick(id)} src={image} alt='img' className='movie__thumbnail' />
    
  )
}
