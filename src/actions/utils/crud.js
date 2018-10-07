import axios from 'axios';
import { push } from 'react-router-redux';

const crud = request => (dispatch) => {
  dispatch({
      type: request.dispatch.begin,
    });
  axios({
      method: request.method,
      url: request.url,
      data: request.data ? request.data : null,
    })
    .then((res) => {
      console.log('res', res)
      dispatch({
            type: request.dispatch.end,
            payload: res.data,
            fullResponse: res,
          });
      if (request.push) {
        dispatch(push(request.push));
      }
    })
    .catch((err) => {
      console.log('err', err)
      dispatch({
        type: request.dispatch.fail,
        payload: err,
      });
    });
};

export default crud;
