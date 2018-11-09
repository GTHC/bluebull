import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// redux actions
import { login, logout } from '../actions/login';
import { getUser } from '../actions/user';

// routing
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import ConnectedSwitch from '../utils/ConnectedSwitch';

// firebase
import firebase from './../firebase';

// containers
import Login from './Login';
import Home from './Home';
import Nav from './Nav';

// routes
const AppRoutes = () => (
  <ConnectedSwitch>
    <Route exact path="/app" component={Home} />
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
    const { login, logut, getUser, user } = this.props;
   firebase.auth().onAuthStateChanged(userData => {
      if (userData) {
        // login(userData);
        getUser(userData.email);
      } else {
        logout();
      }
    });
  };

  render() {
    const { user, history } = this.props;
    return (
        <ConnectedRouter history={history}>
          <ConnectedSwitch>
            <Route exact path="/" render={() => {
              console.log('user.isLoggedIn', user.isLoggedIn);
              return (user.isLoggedIn ?
                <Redirect to="/app" /> :
                <Redirect to="/login" />)
            }}/>
            <Route path="/app" render={() => (
              user.isLoggedIn ?
              <AppRoutes /> :
              <Redirect to="/login" />
            )} />
            <Route path="/login" render={() => (
              user.isLoggedIn ?
              <Redirect to="/app" /> :
              <Login />
            )} />
          </ConnectedSwitch>
        </ConnectedRouter>
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
      getUser,
    },
    dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);

export {
  App,
};
