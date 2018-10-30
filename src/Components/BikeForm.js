import React from 'react';
import { Button } from 'reactstrap';

class BikeForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      occurredBefore = "",
      occurredAfter = "",
      incidentType = "",
      proximity = "",
      proximitySquare = "",
      query = "",
      limit = ""
    }
  }

  render() {

    var moment = require('moment');

    return (

      <Form>

        <FormGroup>
          <Label for="occurredBefore">Occurred Before:</Label>
          <Input type="date" name="occurredBefore" id="occurredBefore" placeholder="Format: YYYY-MM-DD" />
        </FormGroup>

        <FormGroup>
          <Label for="occurredAfter">Occurred After:</Label>
          <Input type="date" name="occurredAfter" id="occurredAfter" placeholder="Format: YYYY-MM-DD" />
        </FormGroup>

        <FormGroup>
          <Label for="incidentType">Incident Type:</Label>
          <Input type="select" name="incidentType" id="incidentType">
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
          <Input type="text" name="proximity" id="proximity" placeholder="Format: 210 NW 11th Ave; or Portland, OR; or 60647; or 45.521728,-122.67326 (lat,long)" />
        </FormGroup>

        <FormGroup>
          <Label for="proximitySquare">Proximity Square:</Label>
          <Input type="text" name="proximitySquare" id="proximitySquare" placeholder="Format: Integer size of the proximity search (default: 100)" />
        </FormGroup>

        <FormGroup>
          <Label for="query">Query:</Label>
          <Input type="text" name="query" id="query" placeholder="Format: Integer size of the proximity search (default: 100)" />
        </FormGroup>


        
      </ Form>

    )
  }

}

export default BikeForm;
