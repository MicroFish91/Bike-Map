import React, { Component } from 'react';

import BikeMap from './Components/BikeMap';
import AddButton from './Components/AddButton';
import ClusterButton from './Components/ClusterButton';

class App extends Component {

  render() {

    return (

      <div>

        <BikeMap />

        <AddButton />
        <ClusterButton />

      </div>

    )
  }
}

export default App;
