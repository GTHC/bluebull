import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  // extra styling here
};

class Nav extends Component {

  render() {
    const { user, classes } = this.props;
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
              <IconButton style={{ marginLeft: 'auto' }}>
                <Avatar src={user.data.photoURL} />
              </IconButton>
            }
          </Toolbar>
        </AppBar>
        <div styles={{color:'red'}}></div>
      </div>
    );
  }

}

export default withStyles(styles)(Nav);
