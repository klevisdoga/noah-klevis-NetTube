import React, { useRef } from 'react'
import SingleVideo from '../SingleVideo/SingleVideo'
import './Row.scss'

const image_url = "https://image.tmdb.org/t/p/original/";



export default function Row({ title, movies, handleClick, clickedOn, videoId, closeHandler }) {

    const scroller = useRef(null)

    const scrollHandler = (scrollOffset) => {
        scroller.current.scrollLeft += scrollOffset
    }

    if (clickedOn === false) {
        return (
            <div className='genre__one'>
                <h2 className='genre__one-title'>{title}</h2>
                <div className='genre__one-list' ref={scroller}>
                    <button onClick={() => scrollHandler(-600)} className='genre__one-left' type='button'>{"<"}</button>
                    {
                        movies?.map(movie => {
                            const item = (
                                <SingleVideo handleClick={handleClick} id={movie.id} key={movie.id} image={`${image_url}${movie.poster_path}`} />
                            );

                            return item;
                        })
                    }
                    <button onClick={() => scrollHandler(600)} className='genre__one-right' type='button'>{">"}</button>
                </div>
            </div>
        )

    } else {
        return (
            <div className='genre__one'>
                <h2 className='genre__one-title'>{title}</h2>
                <div className='genre__one-list' ref={scroller}>
                    <button onClick={() => scrollHandler(-600)} className='genre__one-left' type='button'>{"<"}</button>
                    {
                        movies?.map(movie => {
                            const item = (
                                <SingleVideo handleClick={handleClick} id={movie.id} key={movie.id} image={`${image_url}${movie.poster_path}`} />
                            );

                            return item;
                        })
                    }
                    <button onClick={() => scrollHandler(600)} className='genre__one-right' type='button'>{">"}</button>
                </div>
                {
                    movies?.filter(movie => movie.id === videoId)
                        .map(movie => {
                            return (
                                <div key={movie.id} className='selected__movie-details'>
                                    <img className='selected__movie-poster' src={`${image_url}${movie.backdrop_path}`} alt='blah' />
                                    <div className='selected__movie-text'>
                                        <span className='selected__movie-title'>{movie.title}</span>
                                        <span className='selected__movie-desc'>{movie.overview}</span>
                                    </div>
                                    <span onClick={() => closeHandler()} className='selected__movie-button'>Close</span>
                                </div>
                            )
                        })
                }
            </div>

        )
    }

};