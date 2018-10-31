import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

// components
import ToggleTime from './ToggleTime';

// font-awesome icons
import { FaSun, FaCloudSun, FaCloudMoon, FaMoon } from 'react-icons/fa';

const styles = theme => ({
  root: {
    width: '100%',
    height: '450px',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    background: theme.palette.background.default,
  },
  table: {
    minWidth: 700,
  },
});

// temporary data
const daysData = () => {
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const data = [];
  for (let day of week) {
    data.push({
      day,
      times: [],
    });
  }

  return data;
};

class Availability extends Component {

  constructor(props) {
    super(props);
    this.state = {
      days: daysData(),
    };
  }

  renderKey = () => (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography> <FaCloudSun /> Morning </Typography>
            </TableCell>
            <TableCell>
              <Typography> <FaSun /> Afternoon  </Typography>
            </TableCell>
            <TableCell>
              <Typography> <FaCloudMoon /> Evening  </Typography>
            </TableCell>
            <TableCell>
              <Typography> <FaMoon /> Night </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );

  render() {
    const { classes } = this.props;
    const { days } = this.state;

    return (
      <div>
        <br />
        <Paper>
          { this.renderKey() }
        </Paper>
        <Paper className={classes.root} elevation={10}>
          <Table padding="dense" >
            <TableHead>
              <TableRow>
                <TableCell padding="dense">Day</TableCell>
                <TableCell padding="dense">Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {days.map(day =>(
                <TableRow hover>
                  <TableCell padding="dense" component="th" scope="row">
                    {day.day}
                  </TableCell>
                  <TableCell padding="dense">
                    <ToggleTime />
                  </TableCell>
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }

}

export default withStyles(styles)(Availability);
