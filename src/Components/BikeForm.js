import React, {Component} from 'react';
import {connect} from 'react-redux';

import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

import * as actions from '../Actions';


// Bike Form used to Obtain Search Parameters to Query BikeWise API
class BikeForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      occurredBefore: "",
      occurredAfter: "",
      incidentType: "",
      proximity: "",
      proximitySquare: "",
      query: "",
      limit: ""
    }
  }

  // Update Form Field States When User Enters New Information
  updateBefore(e){
    this.setState({occurredBefore: e.target.value});
  }

  updateAfter(e){
    this.setState({occurredAfter: e.target.value});
  }

  updateIncident(e){
    this.setState({incidentType: e.target.value});
  }

  updateProximity(e){
    this.setState({proximity: e.target.value});
  }

  updateSquare(e){
    this.setState({proximitySquare: e.target.value});
  }

  updateQuery(e){
    this.setState({query: e.target.value});
  }

  updateLimit(e){
    this.setState({limit: e.target.value});
  }

  // On Form Submit, Update Global State based on Form Inputs
  sendData(e){

    e.preventDefault();

    // Trigger Action
    this.props.bikeUpdate({
      occurredBefore: this.state.occurredBefore,
      occurredAfter: this.state.occurredAfter,
      incidentType: this.state.incidentType,
      proximity: this.state.proximity,
      proximitySquare: this.state.proximitySquare,
      query: this.state.query,
      limit: this.state.limit
    })
    this.props.toggleScatter();
    this.props.toggleAdd();
    this.props.toggleForm();

    // Reset Form Field States
    this.setState({occurredBefore: "", occurredAfter: "", incidentType: "", proximity: "", proximitySquare: "", query: "", limit: ""});

  }

  render() {

    return (

      <Form>

        <FormGroup>
          <Label for="occurredBefore">Occurred Before:</Label>
          <Input type="date" name="occurredBefore" id="occurredBefore" placeholder="Format: YYYY-MM-DD" value={this.state.occurredBefore} onChange={(e) => this.updateBefore(e)} required />
        </FormGroup>

        <FormGroup>
          <Label for="occurredAfter">Occurred After:</Label>
          <Input type="date" name="occurredAfter" id="occurredAfter" placeholder="Format: YYYY-MM-DD" value={this.state.occurredAfter} onChange={(e) => this.updateAfter(e)} required />
        </FormGroup>

        <FormGroup>
          <Label for="incidentType">Incident Type:</Label>
          <Input type="select" name="incidentType" id="incidentType" value={this.state.incidentType} onChange={(e) => this.updateIncident(e)}>
            <option> </option>
            <option>crash</option>
            <option>hazard</option>
            <option>theft</option>
            <option>unconfirmed</option>
            <option>infrastructure_issue</option>
            <option>chop_shop</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="proximity">Proximity:</Label>
          <Input type="text" name="proximity" id="proximity" placeholder="Format: 210 NW 11th Ave; or Portland, OR; or 60647; or 45.521728,-122.67326 (lat,long)" value={this.state.proximity} onChange={(e) => this.updateProximity(e)} required />
        </FormGroup>

        <FormGroup>
          <Label for="proximitySquare">Proximity Square:</Label>
          <Input type="text" name="proximitySquare" id="proximitySquare" placeholder="Format: Integer size of the proximity search (default: 100)" value={this.state.proximitySquare} onChange={(e) => this.updateSquare(e)} />
        </FormGroup>

        <FormGroup>
          <Label for="query">Query:</Label>
          <Input type="text" name="query" id="query" placeholder="Full text search of incidents" value={this.state.query} onChange={(e) => this.updateQuery(e)} />
        </FormGroup>

        <FormGroup>
          <Label for="limit">Limit:</Label>
          <Input type="text" name="limit" id="limit" placeholder="Max integer number of results to return. Defaults to 100" value={this.state.limit} onChange={(e) => this.updateLimit(e)} />
        </FormGroup>

        <Button onClick={(e) => this.sendData(e)} color="primary">Submit </Button>
        
      </ Form>

    )
  }

}


// Map Props from Global State
function mapStateToProps(state){
    
  return {
    formDisplay: state.formDisplay
  }
}

export default connect(mapStateToProps, actions)(BikeForm)