import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import TextField from '@material-ui/core/TextField';

// styles from https://material-ui.com/demos/text-fields/
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class StepTwoCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tentName: '',
      tentType: 'Black',
      tentNumber: '',
    };
    this.handleTentType = this.handleTentType.bind(this);
    this.handleTextField = this.handleTextField.bind(this);
  }

  handleTentType = e => {
    const tentType = e.target.value;
    this.setState({ tentType });
  };

  handleTextField = e => {
    let value = e.target.value;
    if (e.target.id == 'tentNumber' && value < 1) {
      value = 1;
    }

    this.setState({
      [e.target.id]: value,
    }, () => {
      this.props.updateData({
        ...this.state,
      });
    });
  };

  render() {
    const tentTypes = ['Black', 'Dirty Black', 'Blue', 'Dirty Blue', 'White'];
    const { classes, errorData } = this.props;
    return (
      <div>
        <DialogTitle>{
          <div>
            <div style={{ textAlign: 'center' }}> Create Team <GroupAddIcon /></div>

          </div>
        }</DialogTitle>
        <DialogContent>

          <div style={{ textAlign: 'center' }}>
            <TextField
              error={errorData.tentName}
              required
              id="tentName"
              label="Team Name"
              margin="normal"
              variant="outlined"
              onChange={this.handleTextField}
            />
            <br />
            <TextField
              error={errorData.tentNumber}
              required
              type={'number'}
              id="tentNumber"
              label="Tent Number"
              className={classes.textField}
              margin="normal"
              variant="filled"
              onChange={this.handleTextField}
              value={this.state.tentNumber}
            />
            <br />
            <TextField
              error={errorData.tentType}
              id="tentType"
              select
              label="Select"
              className={classes.textField}
              value={this.state.tentType}
              onChange={this.handleTextField}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Please select your tent type"
              margin="normal"
              variant="filled"
              >
              {tentTypes.map(val => (
                <option key={val} value={val}>
                  {val}
                </option>
              ))}
            </TextField>
          </div>
        </DialogContent>
      </div>
    );
  }

}

export default withStyles(styles)(StepTwoCreate);
