import React, { Component } from 'react';

// material-ui
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

// components
import StepOne from './StepOne';
import StepTwoJoin from './StepTwoJoin';
import StepTwoCreate from './StepTwoCreate';

const Transition = (props) => (
  <Slide timeout={{ enter: 50000 }} direction="down" {...props} />
)

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      step: 1,
      type: 'join',
    }
    this.changeStep = this.changeStep.bind(this);
    this.setType = this.setType.bind(this);
    this.renderStep = this.renderStep.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  changeStep = (inc=true) => {
    const { step, open } = this.state;
    this.setState({
      step: inc ? step + 1 : step - 1,
      open: step >= 4 ? false : true,
    });
  }

  setType = (type) => {
    this.setState({ type });
  }

  renderStep = () => {
    const { step, type } = this.state;
    switch (step) {
      case 1: {
        return <StepOne changeStep={this.changeStep} setType={this.setType} />
      }
      case 2: {
        if (type == 'join') {
          return <StepTwoJoin />
        } else if (type == 'create') {
          return <StepTwoCreate />
        }
        break;
      }
      default: {
        return <StepOne changeStep={this.changeStep} setType={this.setType} />
      }
    }
  }

  renderButtons = () => {
    if (this.state.step == 1) {
      return null;
    }
    return (
      <div>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => {this.changeStep(false)}}
          >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={this.changeStep}
            >
              Next
            </Button>
        </DialogActions>
      </div>
    );
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
        >
          {this.renderStep()}
          {this.renderButtons()}
        </Dialog>
      </div>
    );
  }

}

export default SignUp;
