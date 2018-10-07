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
import AvatarButton from './../components/Nav/AvatarButton'
// components
import Nav from './Nav';

// const Test = () => (
//   <div>
//     {user.isLoggedIn ?
//     :
//       <Login />
//     }
//   </div>
// );

class Home extends Component {

  render() {
    const { user, logout } = this.props;
    return (
      <div className="App">
        <Nav user={user} />
        Home
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
