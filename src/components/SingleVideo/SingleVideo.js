import React from 'react'
import { NavLink } from 'react-router-dom'
import './SingleVideo.scss'

export default function SingleVideo({ image }) {
  return (
      
      <img src={image} alt='img' className='movie__thumbnail' />
    
  )
}
