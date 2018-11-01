import React, { Component } from 'react';
// Stepper
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  card: {
    maxWidth: 700,
  },
  media: {
    height: 300,
  },
});

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function getSteps() {
  return ['K-Ville 101', 'Step 2', 'Step 3'];
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return `This is the beginning of a step-by-step process on how to go about all things K-Ville!`;
    case 1:
      return 'Establish the Captain of your team. Submit your Tenting Roster to the Line Monitors. Create and join the team on our app.';
    case 2:
      return `Get a Tent! Make sure you check the specification of the tent for your team and utilize our tools to help you.`;
    default:
      return 'Unknown step';
  }
};

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };
};

class Stepper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      value: 0,
    };
    this.handleReset = this.handleReset.bind(this);
  };

    handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

 render() {
    const steps = getSteps();
    const { activeStep } = this.state;
    const { value } = this.state;

    return (
      {activeStep === steps.length && (
      <div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel> <h3> {label} </h3> </StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                      if (activeStep < 3) {
                      this.setState({ activeStep: activeStep + 1 })
                    }
                    }}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
            )
      })}
      )
      </Stepper>
      </div>
      }
      // )}
    )
  }
};

export default Stepper

export {
  Stepper
}
