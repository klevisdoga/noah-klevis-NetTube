import React from 'react'
import { NavLink } from 'react-router-dom';
import pH from '../../assets/images/video-PH.jpeg';
import './SingleVideo.scss'

export default function SingleVideo() {
  return (
    <NavLink to='/' activeClassName='movie--active' className='movie'><img src={pH} alt='img' className='movie__thumbnail' /></NavLink>
  )
}
