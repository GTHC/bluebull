const initialState = {
  tentName: '',
  tentType: 'Black',
  tentNumber: 1,
};

const signup = (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SU_DATA': {
      return {
        ...state,
        ...action.payload,
      };
    }

    case 'RESET_SU_DATA': {
      return initialState;
    }

    // when user first logins in, it makes sure SU data is not persisted
    case 'LOGIN': {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default signup;
