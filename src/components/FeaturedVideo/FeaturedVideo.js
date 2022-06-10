import React from 'react'
import PH from '../../assets/images/video-PH.jpeg'
import './FeaturedVideo.scss'

export default function FeaturedVideo() {
    return (
        <div className='featured'>
            <h1 className='featured__title'>Featured</h1>
            <div className='featured__movie'>
                <img className='featured__movie-image' src={PH} alt='blah' />
                <div className='featured__movie-text'>
                    <span className='featured__movie-title'>{'Movie Title'}</span>
                    <span className='featured__movie-desc'>
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"}
                    </span>
                </div>
            </div>
        </div>
    )
}
