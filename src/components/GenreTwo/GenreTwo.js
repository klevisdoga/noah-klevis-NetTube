import React from 'react'
import SingleVideo from '../SingleVideo/SingleVideo'
import './GenreTwo.scss'

export default function GenreTwo() {
    return (
        <div className='genre__one'>
            <h1 className='genre__one-title'>Action</h1>
            <div className='genre__one-list'>
                <SingleVideo />
            </div>
        </div>
    )
}
