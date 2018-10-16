const initialState = {
  data: {},
  isLoading: false,
  error: false,
  errorMessage: '',
};

const team = (state=initialState, action) => {
  const beginState = {
    ...state,
    isLoading: true,
    error: false,
    errorMessage: '',
  };

  const failedState = {
    ...state,
    isLoading: false,
    error: true,
  };

  switch (action.type) {
    case 'BEGIN_GET_TEAM': {
      return beginState;
    }

    case 'FAILED_GET_TEAM': {
      return {
        ...failedState,
        errorMessage: action.payload,
      };
    }

    case 'END_GET_TEAM': {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    }

    case 'BEGIN_PUT_TEAM': {
      return beginState;
    }

    case 'FAILED_PUT_TEAM': {
      return {
        ...failedState,
        errorMessage: action.payload,
      };
    }

    case 'END_PUT_TEAM': {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    }

    case 'BEGIN_POST_TEAM': {
      return beginState;
    }

    case 'FAILED_POST_TEAM': {
      return {
        ...failedState,
        errorMessage: action.payload,
      };
    }

    case 'END_POST_TEAM': {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    }

    default: {
      return state;
    }
  }
};

export default team;
