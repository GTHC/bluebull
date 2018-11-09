import React, { Component } from 'react';

// firebase
import firebase from './../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// material-ui
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

// image
import background from '../images/tent.png';

var sectionStyle = {
  width: "110%",
  height: "10000px",
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'repeat'
};

const Transition = (props) => (
  <Slide timeout={{ enter: 50000 }} direction="down" {...props} />
)

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGAuth: false,
    };
    this.uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
    //      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
          signInSuccess: () => false,
        },
      };
  }

  render() {
    return (
      <div style={sectionStyle} className="login">
        <Dialog
          open
          TransitionComponent={Transition}
        >
          <DialogTitle>{
            <div style={{ textAlign: 'center'}}>Welcome to G.T.H.C.</div>
          }</DialogTitle>
          <DialogContent>
            <DialogContentText >
              {
                <div style={{ textAlign: 'center'}}>Game Tent Help Center</div>
              }
            </DialogContentText>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
               firebaseAuth={firebase.auth()}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
};

export default Login;
