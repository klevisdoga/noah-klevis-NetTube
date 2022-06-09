import React from 'react'
import SingleVideo from '../SingleVideo/SingleVideo'
import './GenreOne.scss'

export default function GenreOne() {
    return (
        <div className='genre__one'>
            <h1 className='genre__one-title'>Comedy</h1>
            <div className='genre__one-list'>
                <SingleVideo />
            </div>
        </div>
    )
}
