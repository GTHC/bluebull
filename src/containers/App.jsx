import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

// firebase
import firebase from './../firebase';

// containers
import Login from './Login';
import Nav from './Nav';

import logo from './../images/logo.svg';

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
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('User detected', user);
        this.setState({
          user,
        });
      } else {
        console.log('User not detected');
        this.setState({
          user: null,
        });
      }
    });
  };

  render() {
    const { user } = this.state;
    console.log('user', user);
    return (
      <div className="App">
        <Nav  />
        <div>
          {user ?
            <div>
              Welcome {user.displayName}
              <br />
              <img src={user.photoURL} style={{ height: '50px' }} />
              <br />
              <Button variant="contained" onClick={() => {firebase.auth().signOut(); }}>
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

export default App;
