import React from 'react'
import SingleVideo from '../SingleVideo/SingleVideo'
import './GenreThree.scss'

export default function GenreThree() {
    return (
        <div className='genre__one'>
            <h1 className='genre__one-title'>Horror</h1>
            <div className='genre__one-list'>
                <SingleVideo />
            </div>
        </div>
    )
}
