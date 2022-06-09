import React, { Component } from 'react'
import GenreOne from '../GenreOne/GenreOne'
import GenreThree from '../GenreThree/GenreThree'
import GenreTwo from '../GenreTwo/GenreTwo'
import './PageGenres.scss'

export default class PageGenres extends Component {
  render() {
    return (
      <div className='genres'>
          <GenreOne/>
          <GenreTwo/>
          <GenreThree/>
      </div>
    )
  }
}
