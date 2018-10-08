import React, { Component } from 'react';

// material-ui
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

// components
import StepOne from './StepOne';

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

  render() {
    const { open } = this.state;
    return (
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
        >
          <StepOne changeStep={this.changeStep} setType={this.setType} />
        </Dialog>
      </div>
    );
  }

}

export default SignUp;
