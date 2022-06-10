import React, {useRef} from 'react'
import SingleVideo from '../SingleVideo/SingleVideo'
import './Row.scss'

const image_url = "https://image.tmdb.org/t/p/original/";



export default function Row({ title, movies }) {

    const scroller = useRef(null)

    const scrollHandler = (scrollOffset) => {
        scroller.current.scrollLeft += scrollOffset
    }
    
    return (
        <div className='genre__one'>
            <h2 className='genre__one-title'>{title}</h2>
            <div className='genre__one-list' ref={scroller}>
            <button onClick={()=> scrollHandler(-600)} className='genre__one-left'type='button'>{"<"}</button>
            {
                movies?.map(movie => {
                    const item = (
                       
                        <SingleVideo key={movie.id} image={`${image_url}${movie.poster_path}`} />
                        
                    );

                    return item;
                })
            }
            <button onClick={()=> scrollHandler(600)} className='genre__one-right'type='button'>{">"}</button>
            </div>
        </div>
    )
};