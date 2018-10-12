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
      step: 1,
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
  }

  changeStep = (inc=true) => {
    const { step, open, errorData } = this.state;
    if (errorData.error && step == 2 && inc) { // if error exists, then don't change step
      this.setState({
        showError: true,
      });
    } else {
      const newStep = inc ? step + 1 : step - 1;

      if (newStep == 1) {
        this.props.redux.resetSUDataRedux();
      }

      this.setState({
        step: newStep,
        open: newStep > 4 ? false : true,
        showError: false,
      });
    }
  };

  setType = (type) => {
    this.setState({ type });
  };

  updateData = data => {
    const { type } = this.state;
    const { updateSUDataRedux } = this.props.redux;

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
    } else {
      this.setState({
        errorData: { error: false },
        data,
      });
    }

    updateSUDataRedux(data);
  };

  // render helper functions
  renderStep = () => {
    const { step, type, errorData } = this.state;
    const { signup } = this.props.redux;
    switch (step) {
      case 1: {
        return <StepOne changeStep={this.changeStep} setType={this.setType} />;
      }

      case 2: {
        if (type == 'join') {
          return <StepTwoJoin updateData={this.updateData} />;
        } else if (type == 'create') {
          return (
            <StepTwoCreate
              data={signup}
              updateData={this.updateData}
              errorData={errorData}
            />
          );
        }

        break;
      }

      case 3: {
        return <StepThree />;
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
