import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

// components
import StepOne from './StepOne';
import StepTwoJoin from './StepTwoJoin';
import StepTwoCreate from './StepTwoCreate';
import StepThree from './StepThree';
import Confirm from './Confirm';
import SignUpStepper from './SignUpStepper';

const Transition = (props) => (
  <Slide timeout={{ enter: 50000 }} direction="down" {...props} />
);

const styles = theme => ({
  button: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    const { signup } = this.props.redux;
    this.state = {
      open: true,
      step: 3,
      type: 'join',
      errorData: {
        error: true,
      },
      showError: false,
    };

    this.changeStep = this.changeStep.bind(this);
    this.setType = this.setType.bind(this);
    this.renderStep = this.renderStep.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
    this.renderError = this.renderError.bind(this);
    this.updateData = this.updateData.bind(this);
    this.resetData = this.resetData.bind(this);
  }

  componentWillMount() {
    this.props.redux.getTeams();
  }

  /**
   * changeStep - this will update the Stepper's position using the step field in the state
   * @param  {Boolean} [inc=true] [step is incrementing (+1) or decrementing (-1); default is true/incrementing]
   */
  changeStep = (inc=true) => {
    const { step, open, errorData, type } = this.state;
    const { postTeam, putTeam, getUser, putUser, signup, team, user } = this.props.redux;
    if (errorData.error && step == 2 && inc !== false) { // if error exists, then don't change step
      this.setState({
        showError: true,
      });
    } else {
      const newStep = inc ? step + 1 : step - 1;

      if (newStep === 1) {
        this.props.redux.resetSUDataRedux();
      }

      if (newStep > 4) {
        const { email } = user.data;
        if (type === 'create') {
          postTeam({
            name: signup.tentName,
            number: signup.tentNumber,
            type: signup.tentType,
            passcode: signup.passcode,
            captain: email,
            users: [email],
          });
        } else if (type === 'join') {
          const { captain, users } = team.data;
          users.push(email);
          putTeam({
            captain,
            users,
          });
        }

        putUser({
          id: email,
          team: signup,
        });
        getUser(email);
      }

      this.setState({
        step: newStep,
        open: newStep > 4 ? false : true,
        showError: false,
      });
    }
  };

  // setting up the type of signup: create (Create Team) & join (Join Team)
  setType = (type) => {
    this.setState({ type });
  };

  /**
   * updateData - function that is passed down to the Step Two Components to update the signup team data
   * @param  {Object} [data={}] [object that holds the signup team data, whether it is create or join type]
   */
  updateData = (data={}) => {
    const { type } = this.state;
    const { updateSUDataRedux, team } = this.props.redux;

    // internal function to check if there are any empty elements in data Obj
    const isDataEmpty = () => {
      let isEmpty = false;
      Object.keys(data).forEach(key => {
        if (data[key] == '') {
          isEmpty = true;
        }
      });
      return isEmpty;
    };

    const isPasscodeError = () => (
      !data.passcode ||
      (data.passcode && team.data.passcode.toUpperCase() !== data.passcode.toUpperCase())
    );

    // error checking whenever data is updated
    if (type == 'create' && isDataEmpty()) {
      this.setState({
        errorData: {
          error: true,
          tentType: data.tentType == '',
          tentName: data.tentName == '',
          tentNumber: data.tentNumber == '',
        },
        data,
      });
    } else if (type == 'join' && isPasscodeError()) {
      this.setState({
        errorData: {
          error: true,
          passcode: true,
        },
      });
    } else {
      this.setState({
        errorData: { error: false },
        data,
      });
    }

    updateSUDataRedux(data);
  };

  /**
   * resetData - function for the AutoComplete Component in StepTwoJoin to clear data when clear button is pressed
   */
  resetData = () => {
    const { resetSUDataRedux } = this.props.redux;
    resetSUDataRedux();
    this.setState({
      errorData: { error: true },
    });
  };

  /*
  render helper functions
   */
  renderStep = () => {
    const { step, type, errorData } = this.state;
    const { signup, teams, team, getTeam, resetSUDataRedux } = this.props.redux;
    switch (step) {
      case 1: {
        return <StepOne changeStep={this.changeStep} setType={this.setType} />;
      }

      case 2: {
        if (type == 'join') {
          return (
            <StepTwoJoin
              updateData={this.updateData}
              resetData={this.resetData}
              teams={teams}
              team={team}
              getTeam={getTeam}
              errorData={errorData}
            />
          );
        } else if (type == 'create') {
          return (
            <StepTwoCreate
              data={signup}
              updateData={this.updateData}
              errorData={errorData}
              team={team}
            />
          );
        }

        break;
      }

      case 3: {
        return <StepThree />;
      }

      case 4: {
        return <Confirm type={type} data={signup} team={team} />;
      }

      default: {
        return <StepOne changeStep={this.changeStep} setType={this.setType} />;
      }
    }
  };

  renderButtons = () => {
    if (this.state.step == 1) {
      return null;
    }

    const { classes } = this.props;
    const { step } = this.state;
    return (
      <div>
        <DialogActions>
          <Button
            className={classes.button}
            size="large"
            variant="contained"
            onClick={() => {this.changeStep(false);}}
          >
              Back
            </Button>
            <Button
              className={classes.button}
              size="large"
              variant="contained"
              onClick={this.changeStep}
            >
              {step === 4 ? 'Confirm' : 'Next' }
            </Button>
        </DialogActions>
      </div>
    );
  };

  renderError = () => (
    !this.state.showError ? null :
    <div style={{ color: 'red' }}>
      <Typography color="inherit" align="center">
        Make sure you fill in all details.
      </Typography>
    </div>
  );

  render() {
    const { open, step, type } = this.state;
    return (
      <div className="signup">
        <Dialog
          fullScreen
          open={open}
          maxWidth={false}
          scroll="body"
          TransitionComponent={Transition}
        >
          {this.renderStep()}
          {this.renderError()}
          <SignUpStepper step={step - 1} type={type}/>
          {this.renderButtons()}
        </Dialog>
      </div>
    );
  }

}

export default withStyles(styles)(SignUp);
