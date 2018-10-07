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
// components
import Nav from './Nav';
// Stepper
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// Tabs
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//Expansion
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Cards
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//Icon
import Icon from '@material-ui/core/Icon';

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

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function getSteps() {
  return ['K-Ville 101', 'Step 2', 'Step 3'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `This is the beginning of a step-by-step process on how to go about all things K-Ville!`;
    case 1:
      return 'Establish the Captain of your team. Submit your Tenting Roster.';
    case 2:
      return `Get a Tent! Make sure you check the specification of the tent for your team and utilize our tools to help you.`;
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };
}

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      value: 0,
    }

    this.handleReset = this.handleReset.bind(this);
  }

    handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

 render() {
    const { user, logout } = this.props;
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    const { value } = this.state;

    return (
      <div className="App">
        <Nav user={user} />
        Home
        <div>
          <h2> __
          </h2>
            <img src="http://www.kvillenation.com/images/navigation/brand/brand-dark.png"/>
          <h1>
            Welcome {user.data.displayName}
          </h1>
        </div>
        <div>
          <Paper>
            <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            >
            <Tab label="K-Ville 101" />
            <Tab label="Tenting Policy" />
            <Tab label="FAQ" />
            </Tabs>
          </Paper>
            {value === 0 && 
        <TabContainer>
          <div>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel> <h3> {label} </h3> </StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                        if (activeStep < 3) {
                        this.setState({ activeStep: activeStep + 1 })
                      }
                      }}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length && (
          <Paper square elevation={0}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset}>
              Reset
            </Button>
          </Paper>
            )}
          </div>
        </TabContainer>}
              {value === 1 && 
        <TabContainer>
            <Card>
              <CardActionArea>
                <CardMedia
                      image=""
                      title="Contemplative Reptile"
                    />
                  <CardContent>
                      <Typography center gutterBottom variant="h4" component="h3">
                        The K-Ville Tenting Policy
                      </Typography>
                      <Typography component="p">
                        As Coach Mike Krzyzewski would put it, the
                        greatest thing about the phenomena surrounding
                        Krzyzewskiville and Duke basketball is its
                        ever-changing nature.
K-Ville is alive, and it is constantly growing and
changing in new ways. Remove all of the
students adorned in blue and the television
cameras, however, and it remains a cornerstone
of our university’s social culture.
Krzyzewskiville is about more than a simple
game of basketball. It’s about more than getting
on television. It’s about coming together as a
student body to face adversity and find common
ground.
As Krzyzewskiville has grown, so have the rules
surrounding it. The Line Monitors publish this
policy to give an understanding not only of our
policies and procedures, but the historical
context of why our tent city runs in the way that it
does.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="large" color="primary">
                      Share
                    </Button>
                    <a href ="http://assets.ctfassets.net/esz7g0vcdbew/1ftmRSpQnMkSgK6CQQ8Mm4/be296f3ad3a5694f6d392b49e6660cb4/Policy_2017-2018__1_.pdf">
                    <Button size="large" color="primary">
                      Learn More
                    </Button> </a>
                  </CardActions>
                </Card>
                                <Card color="#0736A4">
                  <CardActionArea>
                    <CardMedia
                      image="/dukebball.jpg"
                      title="dukebasketball"
                    />
                    <CardContent>
                      <Typography center gutterBottom variant="h5" component="h2">
                        K-Ville City Limits
                      </Typography>
                      <Typography component="p">
                        Krzyzewskiville is formally defined as the grassy
lawn area in front of Card and Wilson gyms, their
surrounding sidewalks, and the plaza in front of
Cameron and the Schwartz-Butters Building.
When Carolina Walk-Up Line is in effect,
Krzyzewskiville may be expanded (at the
discretion of the Head Line Monitors).
Note that this does not include the IM Gym, the
Sheffield Tennis Center, the Ambler Tennis
Center, the interior of Card and Wilson gyms, or
any part of Towerview Road or the Card parking
lot.
Students who are on duty for their tent or
walk-up line group should remain within these
boundaries at all times unless given specific
permission from a Line Monitor.
Tenters and walk-up line students who are not
within the city limits at the moment when a
check is called​ will miss the check.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="large" color="#0736A4">
                      Share
                    </Button>
                  </CardActions>
                </Card>

                                                <Card color="#0736A4">
                  <CardActionArea>
                    <CardMedia
                      image="dukebball.jpg"
                      title="dukebasketball"
                    />
                    <CardContent>
                      <Typography center gutterBottom variant="h5" component="h2">
                        Personal Items
                      </Typography>
                      <Typography component="p">
Students are responsible for all personal items
left in K-Ville. Duke University Athletics, Grounds,
and the Line Monitors will not be held liable for
any items lost or stolen.
5
Please be aware that bags, including purses,
backpacks, and umbrellas, are not allowed in
Cameron Indoor Stadium. In addition, no outside
food or drink is allowed in Cameron. Please plan
accordingly.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="large" color="#0736A4">
                      Share
                    </Button>
                  </CardActions>
                </Card>


                                                <Card color="#0736A4">
                  <CardActionArea>
                    <CardMedia
                      image="dukebball.jpg"
                      title="dukebasketball"
                    />
                    <CardContent>
                      <Typography center gutterBottom variant="h5" component="h2">
                        Trash
                      </Typography>
                      <Typography component="p">
Students are responsible for the removal of all
items brought into K-Ville. Please make use of
the many garbage receptacles and recycling
bins. Please ensure that larger items such as
furniture are not left behind.
K-Ville may be cleaned at any point from 90
minutes prior to tip off until the day following the
game. Please make sure any personal items or
items you would like to keep are on your
person or removed from K-Ville ​prior to this
time. Items near trash and recycling bins will be
thrown away.
Note that the cleaning process may take p
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="large" color="#0736A4">
                      Share
                    </Button>
                  </CardActions>
                </Card>
                </TabContainer>}
              {value === 2 && <TabContainer><h2> Frequently Asked Questions </h2>
                <div>
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
            Each tent is allowed one missed check per tenting
period. Sustaining two missed checks in a tenting
period will result in the tent being bumped to the end
of the line.
If a wait list has been formed, the tent will be moved
to the end of the wait list. The first tent on the wait list
will then become the last tent in K-Ville.

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
          <Typography>
A grace period may be announced in which no tent
checks will be called. During grace, tenters need not
be on duty in K-Ville.

Grace shall be given on the following occasions:

<ul>
<li>For one hour after a tent check is
completed.</li>
<li>Two hours before and after a men’s or
women’s home basketball game.</li>
<li>One hour before and after a men’s or
women’s away basketball game</li>
<li> For any of the weather-related incidents as
stated on page 8 of this policy. </li>
<li> At any time for any length at the discretion
of the Head Line Monitor. </li>
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
    </div></TabContainer>}
          </div>
        <img src="https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/08/19/zion_and_barrett_in_duke_uniforms.jpg?itok=4VhNwH9q"/>
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
