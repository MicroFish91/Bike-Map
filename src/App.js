import React, { Component } from 'react';

import BikeMap from './Components/BikeMap';
import BikeForm from './Components/BikeForm';

import './App.css';

class App extends Component {

  render() {

    return (

      <div>

        <BikeMap />

        <BikeForm />

      </div>

    )
  }
}

export default App;
