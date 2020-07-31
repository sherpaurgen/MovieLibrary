import React, { Component } from 'react'
import Movies from './components/movies'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Movies />
        </main>
      </React.Fragment>

    )
  }
}


