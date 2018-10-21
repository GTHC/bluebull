import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
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

class Passcode extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleTextField = this.handleTextField.bind(this);
  }

  handleTextField = e => {
    const { team, updateData } = this.props;
    const value = e.target.value;
    this.setState({ value });
    updateData({ passcode: value });
  };

  render() {
    const { classes, team, errorData } = this.props;
    const { value } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <TextField
          error={errorData.error}
          required
          id="passcode"
          label="Passcode"
          className={classes.textField}
          margin="normal"
          variant="filled"
          onChange={this.handleTextField}
          value={value}
        />
      </div>
    );
  }

}

export default withStyles(styles)(Passcode);
