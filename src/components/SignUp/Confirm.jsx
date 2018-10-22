import React, { PureComponent } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

class Confirm extends PureComponent {

  render() {
    const { type, data, team } = this.props;
    return (
      <div style={{ textAlign: 'center' }}>
        <DialogTitle>
          {
            <div>
              <div style={{ textAlign: 'center' }}> Confirm Information <Check /></div>

            </div>
          }
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="h2">
              Please confirm the following to be correct:
            </Typography>
              <div>
                <br />
                <strong>Captain: </strong>
                {
                  type === 'create' ? 'YOU' :
                  team.data.captain
                }
                <br />
                <strong>Tent Name: </strong>
                {data.tentName}
                <br />
                <strong>Tent Number: </strong>
                {data.tentNumber}
                <br />
                <strong>Tent Type: </strong>
                {data.tentType}
                <br />
                <strong>Passcode: </strong>
                {data.passcode}
                <br />
              </div>
          </DialogContentText>
        </DialogContent>
      </div>
    );
  }

}

export default withStyles()(Confirm);
