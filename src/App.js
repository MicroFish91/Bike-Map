import React, { Component } from 'react';
import {connect} from 'react-redux';

import Navbar from './Components/Navbar';
import BikeMap from './Components/BikeMap';
import BikeForm from './Components/BikeForm';

import './App.css';

class App extends Component {

  render() {

    return (

      <div>

        <Navbar />

        <br></br>

        <BikeMap />

        <br></br>

        {
          (this.props.formDisplay)
          ? <BikeForm />
          : <div></div>
        }

      </div>

    )
  }
}

// Map Props from Global State
function mapStateToProps(state){
    
  return {
    formDisplay: state.formDisplay
  }
}

export default connect(
  mapStateToProps,
  null
)(App);
