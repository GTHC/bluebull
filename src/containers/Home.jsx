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

// components
import Nav from './Nav';
import SignUp from '../components/SignUp';
import AccordionExampleNested from './FAQ';
import StepExampleAttached from './stepper';

class Home extends Component {

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
        {
          !user.data.team &&
          <SignUp redux={redux} />
        }
        _
        <Nav user={user} />
        _
        <div>
          <h1>
            Welcome {user.data.displayName}
          </h1>
        </div>
        <AccordionExampleNested/>
        <StepExampleAttached/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

export {
  Home,
};
