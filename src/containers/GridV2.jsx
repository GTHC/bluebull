import _ from 'lodash';
import React, { Component } from 'react';
import { Grid, Segment, Divider, Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const hourly = [
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

const times = [
  '00:15 ~ 01:00', // Only 1:45 Minute Interval
  '01:00 ~ 02:15',
  '02:15 ~ 03:30',
  '03:30 ~ 04:45',
  '04:45 ~ 06:00',
  '06:00 ~ 07:15',
  '07:15 ~ 08:30',
  '08:30 ~ 09:45',
  '09:45 ~ 11:00',
  '11:00 ~ 12:15',
  '12:15 ~ 13:30',
  '13:30 ~ 14:45',
  '14:45 ~ 16:00',
  '16:00 ~ 17:15',
  '17:15 ~ 18:30',
  '18:30 ~ 19:45',
  '19:45 ~ 21:00',
  '21:00 ~ 22:15',
  '22:15 ~ 23:30',
  '23:30 ~ 00:15',
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

class Grids extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isToggleOn: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
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
                <Grid.Column key={0}>
                <button onClick={this.handleClick}>
                  {this.state.isToggleOn ? 'Available' : 'Busy'}
                </button>
                <Icon color='green' name='checkmark' size='large' /></Grid.Column>
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
