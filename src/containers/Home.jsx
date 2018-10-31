import React, { Component } from 'react';
// firebase
import firebase from './../firebase';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// redux actions
import { login, logout } from '../actions/login';
// material-ui
import Button from '@material-ui/core/Button';
// components
import Nav from './Nav';
// Stepper
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from './Stepper.';

// Tabs
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//Expansion
import ExpansionPanel from './FAQ';
// Cards
import Card from './Policy';
//Icon
import Icon from '@material-ui/core/Icon';

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

// function TabContainer(props) {
//   return (
//     <Typography component="div" style={{ padding: 8 * 3 }}>
//       {props.children}
//     </Typography>
//   );
// }
//
// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
// };
//
// function getSteps() {
//   return ['K-Ville 101', 'Step 2', 'Step 3'];
// }
//
// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return `This is the beginning of a step-by-step process on how to go about all things K-Ville!`;
//     case 1:
//       return 'Establish the Captain of your team. Submit your Tenting Roster to the Line Monitors. Create and join the team on our app.';
//     case 2:
//       return `Get a Tent! Make sure you check the specification of the tent for your team and utilize our tools to help you.`;
//     default:
//       return 'Unknown step';
//   }
// }

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      value: 0,
    }

    this.handleReset = this.handleReset.bind(this);
  }

    handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

 render() {
    const { user, logout } = this.props;
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    const { value } = this.state;

    return (
      <div className="App">
        <Nav user={user} /> Home
          <div>
            <h2> __ </h2>
            <img src="http://www.kvillenation.com/images/navigation/brand/brand-dark.png"/>
            <h1> Welcome {user.data.displayName} </h1>
          </div>
          <div>
            <Paper>
              <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
              >
                <Tab label="K-Ville 101" />
                <Tab label="Tenting Policy" />
                <Tab label="FAQ" />
              </Tabs>
            </Paper>
          </div>
          <div>
          {value === 0 &&
            <TabContainer>
              // <Stepper />
                <Paper square elevation={0}>
                  <Typography>All steps completed - You are finished! </Typography>
                  <Button onClick={this.handleReset}> Reset </Button>
                  <img disabled = {activeStep === 0} src="http://www.camping-tent-reviews.com/image-files/kelty-teton-4-tent-specs.jpg"/>
                </Paper>
              </TabContainer>
          }
          {value === 1 &&
            <TabContainer> Value 1
            </TabContainer>
          }
          {value === 2 &&
            <TabContainer> <h2> Frequently Asked Questions </h2>
              <div> Yeah </div>
            </TabContainer>
          }
        </div>
    );
  }
}

// connecting to redux
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(
    {
      login,
      logout,
    },
    dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

export {
  Home,
};
