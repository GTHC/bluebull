import _ from 'lodash';
import React, { Component } from 'react';
import { Grid, Segment, Divider, Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const times = [
    'Night Shift',
  '07:00 ~ 08:15',
  '08:15 ~ 09:30',
  '09:30 ~ 10:45',
  '10:45 ~ 12:00',
  '12:00 ~ 13:15',
  '13:15 ~ 14:30',
  '14:30 ~ 15:45',
  '15:45 ~ 17:00',
  '17:00 ~ 18:15',
  '18:15 ~ 19:30',
  '19:30 ~ 20:45',
  '20:45 ~ 22:00',
  '22:00 ~ 23:15',
  '23:15 ~ 00:30',
  '00:30 ~ 02:00', // 1 hour 30 min shift till night shift, accounts for switching
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
