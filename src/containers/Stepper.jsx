import React, { Component } from 'react';

// semantic ui components
import { Button, Form, Step, Divider } from 'semantic-ui-react';

// sub-components
import UserSignUp from './signup/UserSignUp';
import TeamSignUp from './signup/TeamSignUp';
import AllSet from './signup/AllSet';

class SignUpFields extends Component {
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
    const steps = [
        { key: 'user', icon: 'user', title: 'User Credentials', description: 'Add your email and create an account password.', active: (activeStep === 0) },
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
            <UserSignUp
              login={login}
              toggleDisableNext={toggleDisableNext}
              updateUserInfo={updateUserInfo}
            />
          }
          { activeStep === 1 &&
            <TeamSignUp
              login={login}
              toggleDisableNext={toggleDisableNext}
              updateTeamInfo={updateTeamInfo}
            />
          }
          { activeStep === 2 &&
            <AllSet login={login} />
          }

        </Form>
        <br />
        { activeStep < 2 ?
          <Button.Group fluid>
            <Button id="back" content='Back' icon='left arrow' labelPosition='left' color="red" onClick={this.handleButtonClick} />
            <Button.Or />
            <Button id="next" content='Next' icon='right arrow' labelPosition='right' disabled={login.disableNext} color="green" onClick={this.handleButtonClick} />
          </Button.Group> :
          <Button.Group fluid>
            <Button id="back" content='Back' icon='left arrow' labelPosition='left' color="red" onClick={this.handleButtonClick} />
            <Button.Or />
            <Button id="signup" content='Sign Up and Login' icon='sign in' labelPosition='right' color="green" onClick={this.handleButtonClick} />
          </Button.Group>
        }
        <br />
        <br />
      </div>
    );
  }
}

export default SignUpFields;
