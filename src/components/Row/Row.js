import React from 'react'
import SingleVideo from '../SingleVideo/SingleVideo'
import './Row.scss'

const image_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, movies }) {

    return (
        <div className='genre__one'>
            <h2 className='genre__one-title'>{title}</h2>
            <div className='genre__one-list'>
            {
                movies?.map(movie => {
                    const item = (
                        <SingleVideo key={movie.id} image={`${image_url}${movie.poster_path}`} />
                    );

                    return item;
                })
            }
            </div>
        </div>
    )
};

/**
 * <h2 className='genre__one-title'>{title}</h2>
            <div className='genre__one-list'>
                <SingleVideo />
            </div>
 */
