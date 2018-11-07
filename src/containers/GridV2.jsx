import _ from 'lodash';
import React, { Component } from 'react';
import { Grid, Segment, Divider, Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const times = [
  '00:00 ~ 01:00',
  '01:00 ~ 02:00',
  '02:00 ~ 03:00',
  '03:00 ~ 04:00',
  '04:00 ~ 05:00',
  '05:00 ~ 06:00',
  '06:00 ~ 07:00',
  '07:00 ~ 08:00',
  '09:00 ~ 10:00',
  '11:00 ~ 12:00',
  '12:00 ~ 13:00',
  '13:00 ~ 14:00',
  '14:00 ~ 15:00',
  '15:00 ~ 16:00',
  '16:00 ~ 17:00',
  '17:00 ~ 18:00',
  '18:00 ~ 19:00',
  '20:00 ~ 21:00',
  '21:00 ~ 22:00',
  '22:00 ~ 23:00',
  '23:00 ~ 24:00',
]

const days = [
  'Times',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

class Grids extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  render() {
    const { myFunction } = this.props;
    const free = 'green';
    const busy = 'red';
    const M = 'Monday'

    return (
      <div>
        <Grid columns='equal'>
            <Grid.Column id="myid">
              <Segment inverted> Put in your Availibility Below: Week 1</Segment>
            </Grid.Column>
        </Grid>
        <Grid columns='equal' celled style={{height: '100vh'}}>
            <Grid columns={8} padded>
            {days.map(day => (
              <Grid.Column key={day} color='green'>
                <Grid.Row style={{height: '10%'}}>{_.capitalize(day)}</Grid.Row>
              </Grid.Column>
            ))}
            </Grid>
            {times.map(time => (
              <Grid.Row key={time} style={{height: '6.5%'}}>
                <Grid.Column> {_.capitalize(time)} </Grid.Column>
                <Grid.Column key={0}><Icon color='green' name='checkmark' size='large' /></Grid.Column>
                <Grid.Column key={1}><Icon color='green' name='checkmark' size='large' /></Grid.Column>
                <Grid.Column key={2}><Icon color='green' name='checkmark' size='large' /></Grid.Column>
                <Grid.Column key={3}><Icon color='green' name='checkmark' size='large' /></Grid.Column>
                <Grid.Column key={4}><Icon color='green' name='checkmark' size='large' /></Grid.Column>
                <Grid.Column key={5}><Icon color='green' name='checkmark' size='large' /></Grid.Column>
                <Grid.Column key={6}><Icon color='green' name='checkmark' size='large' /></Grid.Column>
              </Grid.Row>
            ))}
        </Grid>
      </div>
    );
  }
}

export default Grids;

export {
  Grids,
};
