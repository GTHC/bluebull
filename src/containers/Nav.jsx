import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// redux actions
import { login, logout } from '../actions/login';

// material-ui
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

// components
import AvatarMenu from '../components/Nav/AvatarMenu';

const styles = {
  // extra styling here
};

class Nav extends Component {

  render() {
    const { user, classes, logout } = this.props;
    return (
      <div style={{ paddingBottom: '48px' }} >
        <AppBar positon="static">
          <Toolbar>
            <IconButton  color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              G.T.H.C.
            </Typography>
            {
              user &&
              // <AvatarMenu src={user.data.photoURL}/>
              <IconButton style={{ marginLeft: 'auto' }}>
                <AvatarMenu
                  src={user.data.photoURL}
                  logout={logout}
                />
              </IconButton>
            }
          </Toolbar>
        </AppBar>
        <div styles={{color:'red'}}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Nav));

export {
  Nav,
};
