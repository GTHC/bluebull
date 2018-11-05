import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// redux actions
import { login, logout } from '../actions/login';

// material-ui
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

// components
import AvatarMenu from '../components/Nav/AvatarMenu';

// tools
import { Link } from 'react-router-dom';

const styles = {
  // extra styling here
};

class Nav extends Component {
    state = {
    open: false,
   };

   //Opening Side Handler
   handleDrawerOpen = () => {
     this.setState({ open: true });
   };

   //Closing Side Handler
    handleDrawerClose = () => {
      this.setState({ open: false });
    };

  render() {
    //Values Displayed in Drawer feature
    const { user, classes, logout } = this.props;
    const options = (
      <div className={classes.list}>
        <List>
           {[{
             name: 'Home',
             icon: <InboxIcon />,
             url: '/app',
           },
           {
             name: 'Settings',
             icon: <InboxIcon />,
             url: '/app/settings',
           },
           {
             name: 'Messages',
             icon: <InboxIcon />,
             url: '/app/settings',
           },
         ].map((obj, index) => (
             <Link to={obj.url}>
               <ListItem button key={obj.name}>
                 <ListItemIcon>{obj.icon}</ListItemIcon>
                 <ListItemText primary={obj.name} />
               </ListItem>
             </Link>
           ))}
         </List>
         <Divider />
      </div>
    );


    return (
      <div style={{ paddingBottom: '48px' }} >
        <AppBar positon="static">
          <Toolbar>
            <IconButton  color="inherit" aria-label="Menu" onClick ={this.handleDrawerOpen}>
              <MenuIcon/>
            </IconButton>
            <SwipeableDrawer
              open={this.state.open}
              onClose={this.handleDrawerClose}
              onOpen={this.handleDrawerOpen}
            >
              {options}

        </SwipeableDrawer>
            <Typography variant="title" color="inherit">
              G.T.H.C.
            </Typography>
            {
              user &&
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

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Nav));

export {
  Nav,
};
