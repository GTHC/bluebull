import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

const styles = theme => ({
  button: {
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});


class StepOne extends Component {
  constructor(props) {
    super(props);
    this.joinTeam = this.joinTeam.bind(this)
    this.createTeam = this.createTeam.bind(this)
  }

  joinTeam = () => {
    this.props.setType('join');
    this.props.changeStep();
  }

  createTeam = () => {
    this.props.setType('create');
    this.props.changeStep();
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{ textAlign: 'center'}}>
        <DialogTitle>{
          <div style={{ textAlign: 'center'}}>Seems like you don't have a team!</div>
        }</DialogTitle>
        <DialogContent>
          <DialogContentText >
            {
              <div style={{ textAlign: 'center'}}>Before you continue, choose one of the following: </div>
            }
          </DialogContentText>
          <br />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.joinTeam}
          >
            Join a Team
            <GroupIcon className={classes.rightIcon}/>
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={this.createTeam}
          >
            Create a Team
            <GroupAddIcon className={classes.rightIcon}/>
          </Button>
        </DialogContent>
      </div>
    );
  }

}

export default withStyles(styles)(StepOne);
