import React, { Component } from 'react';

// firebase
import firebase from './../firebase';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// redux actions
import { login, logout } from '../actions/login';
import { updateSUDataRedux, resetSUDataRedux } from '../actions/signup';
import { getTeam, putTeam, postTeam } from '../actions/team';
import { getUser, putUser } from '../actions/user';
import { getTeams } from '../actions/teams';

// material-ui
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// components
import Nav from './Nav';

class Settings extends Component {

  render() {
    const {
      user, getUser, putUser,
      logout,
      signup, updateSUDataRedux, resetSUDataRedux,
      team, getTeam, putTeam, postTeam,
      teams, getTeams,
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
    const teamsRedux = {
      teams,
      getTeams,
    };
    const userRedux = {
      user, getUser, putUser,
    };
    const redux = {
      ...userRedux,
      ...signupRedux,
      ...teamRedux,
      ...teamsRedux,
    };

    return (
      <div className="App">
        <Nav user={user} />
        <div>
          <h1>
            Settings {user.data.displayName}
          </h1>
          <TextField
         id="standard-required"
         label="Name"
         value={user.data.displayName}
         margin="normal"
       />
       <br />
         <TextField
        id="standard-"
        label="Name"
        value={user.data.displayName}
        margin="normal"
      />

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
  teams: state.teams,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(
    {
      login, logout,
      updateSUDataRedux, resetSUDataRedux,
      getTeams,
      getUser, putUser,
      getTeam, putTeam, postTeam,
    },
    dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

export {
  Settings,
};
