import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Cards
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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

class Policy extends Component {

 render() {
    return (
      <div>
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
                <a href ="http://assets.ctfassets.net/esz7g0vcdbew/1ftmRSpQnMkSgK6CQQ8Mm4/be296f3ad3a5694f6d392b49e6660cb4/Policy_2017-2018__1_.pdf">
                <Button size="large" color="primary">
                  Learn More
                </Button> </a>
              </CardActions>
            </Card>
            <img src="https://qph.fs.quoracdn.net/main-qimg-bfdfad61efb855768811e00b1772184d-c"/>
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
                <a href ="http://assets.ctfassets.net/esz7g0vcdbew/1ftmRSpQnMkSgK6CQQ8Mm4/be296f3ad3a5694f6d392b49e6660cb4/Policy_2017-2018__1_.pdf">
                  <Button size="large" color="primary">
                    Learn More
                  </Button>
                </a>
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

                    Please be aware that bags, including purses,
                    backpacks, and umbrellas, are not allowed in
                    Cameron Indoor Stadium. In addition, no outside
                    food or drink is allowed in Cameron. Please plan
                    accordingly.
                  </Typography>
                </CardContent>
                <img src="https://userscontent2.emaze.com/images/287e0420-c315-4e64-af21-2e002f378789/7fcd7a3bac758398418d70c4b6aab9e3.jpg"/>
              </CardActionArea>
              <CardActions>
                <a href ="http://assets.ctfassets.net/esz7g0vcdbew/1ftmRSpQnMkSgK6CQQ8Mm4/be296f3ad3a5694f6d392b49e6660cb4/Policy_2017-2018__1_.pdf">
                  <Button size="large" color="primary">
                    Learn More
                  </Button>
                </a>
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
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              <a href ="http://assets.ctfassets.net/esz7g0vcdbew/1ftmRSpQnMkSgK6CQQ8Mm4/be296f3ad3a5694f6d392b49e6660cb4/Policy_2017-2018__1_.pdf">
                <Button size="large" color="primary">
                  Learn More
                </Button>
              </a>
              </CardActions>
            </Card>
          </div>
        )
      }
    }
