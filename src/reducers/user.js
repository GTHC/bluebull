const initialState = {
  data: {},
  isLoggedIn: false,
};

const user = (state=initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        data: action.payload,
        isLoggedIn: true,
      };
    }

    case 'LOGOUT': {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default user;
