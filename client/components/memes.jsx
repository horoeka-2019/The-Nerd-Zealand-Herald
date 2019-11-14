import React from 'react'
import * as api from '../api'

class Memes extends React.Component {
    state = {
        title: null,
        url: null
    }

    componentDidMount() {
      api.getMemes()
      .then(response => {
          this.setState({
              title: response.body.title,
              URL: response.body.URL
          })
          .then(console.log())
      })
    }
  
  
    render () {
      return (
        <React.Fragment>
          <h1>Dank Memes Yo!</h1>
          <h3>{this.state.title}</h3>
          <img src = {this.state.URL} height = '200px'></img>
        </React.Fragment>
      )
    }
  }

export default Memes
  
//   {
//     "postLink": "https://redd.it/9vqgv2",
//     "subreddit": "memes",
//     "title": "Good mor-ning Reddit!...",
//     "url": "https://i.redd.it/yykt3r9zsex11.png"
//   }


