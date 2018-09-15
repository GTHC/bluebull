import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import firebase from './../firebase';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGAuth: false,
    };
    this.uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
          signInSuccess: () => false,
        },
      };
  }

  render() {
    return (
      <div>
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
};

export default Login;
