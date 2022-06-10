import React, { Component } from 'react'
import Row from '../Row/Row';
import requests from '../../data/requests';
import axios from '../../data/axios';
import './PageGenres.scss'

export default class PageGenres extends Component {
  state = {
    action: []
  }

  componentDidMount() {
    // Fetch action movies
    axios.get(requests.fetchAction)
    .then(res => this.setState({action: res.data.results}))
    .catch(res => console.log(res));

    //Fetch trending movies
    axios.get(requests.fetchTrending)
    .then(res => this.setState({trending: res.data.results}))
    .catch(res => console.log(res));

    //Fetch top rated movies
    axios.get(requests.fetchTopRated)
    .then(res => this.setState({top: res.data.results}))
    .catch(res => console.log(res));

    //Fetch comedy movies
    setTimeout(() => {
      axios.get(requests.fetchComedy)
    .then(res => this.setState({comedy: res.data.results}))
    .catch(res => console.log(res));

    //Fetch horror movies
    axios.get(requests.fetchHorror)
    .then(res => this.setState({horror: res.data.results}))
    .catch(res => console.log(res));

    // Fetch romance movies
    axios.get(requests.fetchRomance)
    .then(res => this.setState({romance: res.data.results}))
    .catch(res => console.log(res));

    //Fetch documentaries
    axios.get(requests.fetchDocumentaries)
    .then(res => this.setState({documentary: res.data.results}))
    .catch(res => console.log(res));
    }, 1);
  }

  render() {
    return (
      <div className='genres'>
          <Row title="Trending" movies={this.state.trending} />
          <Row title="Top Rated" movies={this.state.top} />
          <Row title="Action" movies={this.state.action} />
          <Row title="Comedy" movies={this.state.comedy} />
          <Row title="Horror" movies={this.state.horror} />
          <Row title="Romance" movies={this.state.romance} />
      </div>
    )
  }
}
