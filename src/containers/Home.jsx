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
import SignUp from '../components/SignUp';

class Home extends Component {

  render() {
    const { user, logout } = this.props;
    return (
      <div className="App">
        <SignUp />
        <Nav user={user} />
        Home
        <div>
          <h1>
            Welcome {user.data.displayName}
          </h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

export {
  Home,
};
