import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import WbSunny from '@material-ui/icons/WbSunny';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

// font-awesome icons
import { FaSun, FaCloudSun, FaCloudMoon, FaMoon } from 'react-icons/fa';

const styles = theme => ({
  toggleContainer: {
    height: 56,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: `${theme.spacing.unit}px 0`,

    // background: theme.palette.background.default,
  },
});

class ToggleTime extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formats: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e, formats) => this.setState({ formats });

  render() {
    const { classes } = this.props;
    const { formats } = this.state;

    return (
      <div>
        <Grid item xs={12} sm={6}>
          <div className={classes.toggleContainer}>
            <ToggleButtonGroup value={formats} onChange={this.handleClick}>
              <ToggleButton value="italic">
                <FaCloudSun size="2em" />
              </ToggleButton>
              <ToggleButton value="afternoon">
                <FaSun size="1.5em" />
              </ToggleButton>
              <ToggleButton value="underlined">
                <FaCloudMoon size="2em" />
              </ToggleButton>
              <ToggleButton value="color">
                <FaMoon size="1.5em" />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Grid>
      </div>
    );
  }

}

export default withStyles(styles)(ToggleTime);
