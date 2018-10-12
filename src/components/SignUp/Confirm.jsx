import React, { PureComponent } from 'react';

// material-ui
import Typography from '@material-ui/core/Typography';

class Confirm extends PureComponent {

  render() {
    return (
      <div>
        <Typography h2>
          Please confirm the following to be correct:
        </Typography>
      </div>
    );
  }

}

export default Confirm;
