import React, { Component } from 'react';

// semantic ui components
import { Button, Form, Step, Divider } from 'semantic-ui-react';

// sub-components

class Stepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
    }
  }
  handleButtonClick = (e, data) => {
      const { activeStep } = this.state;
      switch (data.id) {
        case 'back': {
          if (activeStep === 0) {
            return;
          }
          this.setState({ activeStep: activeStep - 1 });
          return;
        }
        case 'next': {
          if (activeStep < 2) {
            this.setState({ activeStep: activeStep + 1 });
          }
          return;
        }
      }
    }

  render() {
    const steps = [
        { key: 'step1', icon: 'user', title: 'User Credentials', description: 'Add your email and create an account password.', active: (activeStep === 0) },
        { key: 'team', active: true, icon: 'users', title: 'Team Information', description: 'Let us know which team you are on!', active: (activeStep === 1) },
        { key: 'join', disabled: true, icon: 'checkmark box', title: 'All Set!', active: (activeStep === 2), completed: (activeStep === 2) },
      ];
    const { activeStep } = this.state;
    const { value } = this.state;

    return (
      <div>
        <Step.Group fluid items={steps} />
        <br />
        <br />
        <Form>
          { activeStep === 0 &&
           <div>  Yeah!  </div>
          }
          { activeStep === 1 &&
             <div>  1  </div>
          }
          { activeStep === 2 &&
             <div> 2  </div>
          }
        </Form>
        <br />
        { activeStep < 2 ?
          <Button.Group fluid>
            <Button id="back" content='Back' icon='left arrow' labelPosition='left' color="red" onClick={this.handleButtonClick} />
            <Button.Or />
            <Button id="next" content='Next' icon='right arrow' labelPosition='right' color="green" onClick={this.handleButtonClick} />
          </Button.Group> :
          <Button.Group fluid>
            <Button id="back" content='Back' icon='left arrow' labelPosition='left' color="red" onClick={this.handleButtonClick} />
            <Button.Or />
            <Button id="signup" content='Finish' icon='sign in' labelPosition='right' color="green" onClick={this.handleButtonClick} />
          </Button.Group>
        }
        <br />
        <br />
      </div>
    );
  }
}

export default Stepper;
