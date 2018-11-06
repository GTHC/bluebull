import React, { Component } from 'react';

// firebase
// import firebase from './../../firebase';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

class AvatarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    }
    this.handleAvatar = this.handleAvatar.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  handleAvatar = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  signOut = () => {
//    firebase.auth().signOut();
    this.props.logout();
  }

  render() {
    const { src } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleAvatar}
          color="inherit"
          style={{ marginLeft: 'auto' }}
        >
            <Avatar src={src} />
        </IconButton>
        <Menu
          id="menu-appbar"
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.signOut}>Sign Out</MenuItem>
        </Menu>
      </div>
    );
  }

}

export default withStyles()(AvatarMenu);

export {
  AvatarMenu
};
