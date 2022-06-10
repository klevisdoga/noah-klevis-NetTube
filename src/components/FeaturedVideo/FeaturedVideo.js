import React, { Component } from 'react'
import PH from '../../assets/images/video-PH.jpeg'
import axios from '../../data/axios';
import requests from '../../data/requests';
import './FeaturedVideo.scss'
const image_url = "https://image.tmdb.org/t/p/original/";

export default class FeaturedVideo extends Component {
    state = {
        movies: [],
        featured: null
    }

    getRandomFeatured(array){
        let index = Math.floor(Math.random() * array.length);
        this.setState({featured: array[index]});
    }

    componentDidMount() {
        axios.get(requests.fetchTrending)
        .then(res => {
            console.log(res);
            this.setState({movies: res.data.results});
            this.getRandomFeatured(this.state.movies);
        })
        .catch(res => console.log(res));
    }

    render() {
        if(!this.state.featured){
            return <div />
        }

        return (
            <div className='featured'>
                <h1 className='featured__title'>Featured</h1>
                <div className='featured__movie'>
                    <img className='featured__movie-image' src={`${image_url}${this.state.featured.backdrop_path}`} alt='blah' />
                    <div className='featured__movie-text'>
                        <span className='featured__movie-title'>{this.state.featured.title}</span>
                        <span className='featured__movie-desc'>
                            {this.state.featured.overview}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
