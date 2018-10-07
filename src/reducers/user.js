const initialState = {
  data: {},
  isLoggedIn: false,
  isLoading: false,
  error: false,
  errorMessage: '',
};

const user = (state=initialState, action) => {
  const beginState = {
    ...state,
    isLoading: true,
    error: false,
    errorMessage: ''
  };

  const failedState = {
    ...state,
    isLoading: false,
    error: true,
  };

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

    case 'BEGIN_GET_USER': {
      return beginState;
    }

    case 'FAILED_GET_USER': {
      return {
        ...failedState,
        errorMessage: action.payload,
      }
    }

    case 'END_GET_USER': {
      return {
        ...state,
        isLoggedIn: true,
        data: action.payload.data,
      }
    }

    case 'BEGIN_PUT_USER': {
      return beginState;
    }

    case 'FAILED_PUT_USER': {
      return {
        ...failedState,
        errorMessage: action.payload,
      }
    }

    case 'END_PUT_USER': {
      return {
        ...state,
        data: action.payload.data,
      }
    }

    default: {
      return state;
    }
  }
};

export default user;
