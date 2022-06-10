import React, { Component } from 'react'
import GenreOne from '../GenreOne/GenreOne'
import './PageGenres.scss'

export default class PageGenres extends Component {
  render() {
    return (
      <div className='genres'>
          <GenreOne/>
      </div>
    )
  }
}
