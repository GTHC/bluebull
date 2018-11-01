import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  card: {
    maxWidth: 700,
  },
  media: {
    height: 300,
  },
});

class FAQ extends Component {

 render() {
    return (
      <div className="App">
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography> <h3> What’s the difference between black, blue, and white tenting? </h3></Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
              <p>Tenting is split up into three periods of varying difficulty, black, blue and white.
                  Requirements for each period are as follows:</p>
                  <ul>
                    <li>Black Tenting: 2 during the day, 10 at night</li>
                    <li>Blue Tenting: 1 during the day, 6 at night</li>
                    <li>White Tenting: 1 during the day, 2 at night  </li>
                  </ul>
                  <blockquote>
                    30 of the 100 possible tents in K-Ville are reserved specifically for white tenting.
                  </blockquote>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography> <h3> What happens when you miss a check? </h3></Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
              Each tent is allowed one missed check per tenting period. Sustaining two missed checks in a tenting
              period will result in the tent being bumped to the end of the line. If a wait list has been formed, the tent will be moved
              to the end of the wait list. The first tent on the wait list will then become the last tent in K-Ville.
              <a href ="http://assets.ctfassets.net/esz7g0vcdbew/5sq7tLRtE4okwwiGqyaQmI/45843940fa3e1e2acea936a15a364a01/Copy_of_Policy_Overview.docx.pdf">
              <Button> Link to the K-Ville Short Policy </Button> </a>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography> <h3> What does Grace Period entail? </h3></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography> A grace period may be announced in which no tent checks will be called. During grace, tenters need not
                        be on duty in K-Ville. Grace shall be given on the following occasions:
              <ul>
                <li>For one hour after a tent check is completed.</li>
                <li>Two hours before and after a men’s or women’s home basketball game.</li>
                <li>One hour before and after a men’s or women’s away basketball game</li>
                <li> For any of the weather-related incidents as stated on page 8 of this policy. </li>
                <li> At any time for any length at the discretion of the Head Line Monitor. </li>
              </ul>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography> <h3> What do Tent Checks entail? </h3></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Line Monitors will call tent checks at their discretion.
              The sounding of the bullhorn will signal a check.
              Please gather at your tent first and then make your
              way as a group to check in with a Line Monitor by the
              Krzyzewskiville sign.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      <ExpansionPanel disabled>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Go Duke!</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
        <img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/08/19/zion_and_barrett_in_duke_uniforms.jpg?itok=4VhNwH9q"/>
    </div>
    );
  }
}

export default FAQ

export {
  FAQ
}
