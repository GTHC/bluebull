import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import ConnectedSwitch from '../utils/ConnectedSwitch';

// redux actions
import { login, logout } from '../actions/login';

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

// firebase
import firebase from './../firebase';

// containers
import Login from './Login';
import Nav from './Nav';

// images
import logo from './../images/logo.svg';

// routes
const AppRoutes = () => (
  <ConnectedSwitch>
    {/* <Route exact path="/app" component={Home} />
    <Route exact path="/app/" component={Home} />
    <Route exact path="/app/dashboard" component={Dashboard} />
    <Route exact path="/app/user" component={UserProfile} />
    <Route exact path="/app/team" component={TeamProfile} />
    <Route exact path="/app/*" component={Home} /> */}
  </ConnectedSwitch>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.authListner = this.authListner.bind(this);
  }

  componentDidMount() {
    this.authListner();
  }

  authListner = () => {
    const { login, logut, user } = this.props;
    firebase.auth().onAuthStateChanged(userData => {
      if (userData) {
        console.log('User detected', userData);
        login(userData);
      } else {
        console.log('User not detected');
        logout();
      }
    });
  };

  render() {
    const { user, logout } = this.props;
    console.log('user', user);
    return (
      <div className="App">
        <Nav  />
        <div>
          {user.isLoggedIn ?
            <div>
              Welcome {user.data.displayName}
              <br />
              <img src={user.data.photoURL} style={{ height: '50px' }} />
              <br />
              <Button variant="contained" onClick={() => {
                firebase.auth().signOut();
                logout();
              }} >
                Sign out
              </Button>
            </div>
          :
            <Login />
          }
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

export {
  App,
};
