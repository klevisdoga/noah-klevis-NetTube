import React, { Component } from 'react'
import FeaturedVideo from '../../components/FeaturedVideo/FeaturedVideo'
import PageGenres from '../../components/PageGenres/PageGenres'
import './HomePage.scss'

export default class HomePage extends Component {

  
  render() {
    return (
      <div className='home'>
          <FeaturedVideo/>
          <PageGenres/>
      </div>
    )
  }
}
