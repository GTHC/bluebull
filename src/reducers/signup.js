const initialState = {
  tentName: '',
  tentType: 'Black',
  tentNumber: 1,
  passcode: '',
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

    case 'END_GET_TEAM': {
      return {
        ...state,
        tentName: action.payload.data.name,
        tentNumber: action.payload.data.number,
        tentType: action.payload.data.type,
      };
    }

    default: {
      return state;
    }
  }
};

export default signup;
