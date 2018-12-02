import React, { Component } from 'react';

// semantic ui components
import { Button, Form, Step, Divider, Message, Header, Segment, Card, Grid } from 'semantic-ui-react';

// sub-components
import Menu from './Menu';
import TentingDates2018 from './TentingDates';

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
        { key: 'step1', active: true, icon: 'list alternate', title: 'Step 1', description: 'Find your team', active: (activeStep === 0) },
        { key: 'step2', icon: 'users', title: 'Step 2', description: 'Register with the Line Monitors!', active: (activeStep === 1) },
        { key: 'step3', icon: 'bed', title: 'Step 3', active: (activeStep === 2), completed: (activeStep === 0) },
      ];
    const { activeStep } = this.state;
    const { value } = this.state;
    const square = { width: 175, height: 175 }

    return (
      <div>
        <Step.Group fluid items={steps} />
          { activeStep === 0 &&
           <div>
            <img size='500px' src='https://www.kvillenation.com/images/navigation/brand/brand-dark.png' />
            <Message header='Step 1' size='large' content='Find your tent members and establish a Tent Captain.'/>
            <center>
            <Segment circular inverted style={square}>
              <Header as='h2' inverted> Black Tenting
                <Header.Subheader> Best Seats - Longest Form of Tenting </Header.Subheader>
              </Header>
            </Segment>
            <Segment circular color='blue' style={square}>
              <Header as='h2' color='blue'> Blue Tenting
                <Header.Subheader> Only available if there is room in K-Ville </Header.Subheader>
              </Header>
            </Segment>
            <Segment circular style={square}>
              <Header as='h2'> White Tenting
                <Header.Subheader> Shortest Form of Tenting </Header.Subheader>
              </Header>
            </Segment>
            </center>
            <Message header='Tenting Color' size='large' content='Decide which color tenting your group would want to do.'/>
            <TentingDates2018 />
           </div>
          }
          { activeStep === 1 &&
            <div>
             <Message header='Step 2' content='Tent Captain - Register your tent with the Line Monitors using the form below.' size='large' />
             <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfrLvNTtp1jxp4SMsTQz_eHUJMYIvE9Dlq4E_TTiZwo9FThbw/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
          }
          { activeStep === 2 &&
             <div>
              <Menu/>
             </div>
          }
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
