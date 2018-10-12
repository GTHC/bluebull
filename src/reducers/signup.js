const initialState = {
  tentName: '',
  tentType: 'Black',
  tentNumber: 1,
};

const signup = (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SU_DATA': {
      return action.payload;
    }

    case 'RESET_SU_DATA': {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default signup;
