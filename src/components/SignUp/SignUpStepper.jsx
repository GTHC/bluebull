import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

class SignUpStepper extends Component {

  render() {
    const steps = ['Select Join or Create', 'Team Information', 'Personal Availability', 'Confirm']
    return (
      <div>
        <Stepper activeStep={this.props.step}>
          {steps.map((step, index) => {
            let step2content = 'Enter new team info';
            if (this.props.type == 'join') {
              step2content = 'Find your team'
            }
            return (
              <Step>
                <StepLabel>{step}</StepLabel>
                {this.props.step == 1 ?
                  <StepContent>
                    <Typography>{step2content}</Typography>
                  </StepContent>
                  : null}
              </Step>
            );
          })}
        </Stepper>
      </div>
    );
  }

}

export default withStyles()(SignUpStepper);
