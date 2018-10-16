import React, { Component } from 'react';

// firebase
import firebase from './../firebase';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// redux actions
import { login, logout } from '../actions/login';
import { getTeam, putTeam, postTeam } from '../actions/team';
import { updateSUDataRedux, resetSUDataRedux } from '../actions/signup';

// material-ui
import Button from '@material-ui/core/Button';

// components
import Nav from './Nav';
import SignUp from '../components/SignUp';

class Home extends Component {

  render() {
    const {
      user, logout,
      signup, updateSUDataRedux, resetSUDataRedux,
      team, getTeam, putTeam, postTeam,
    } = this.props;
    const signupRedux = {
      signup,
      updateSUDataRedux,
      resetSUDataRedux,
    };
    const teamRedux = {
      team,
      getTeam, putTeam, postTeam,
    };
    const redux = {
      ...signupRedux,
      ...teamRedux,
    };

    return (
      <div className="App">
        <SignUp redux={redux} />
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
  signup: state.signup,
  team: state.team,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(
    {
      login, logout,
      updateSUDataRedux, resetSUDataRedux,
      getTeam, putTeam, postTeam,
    },
    dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

export {
  Home,
};
