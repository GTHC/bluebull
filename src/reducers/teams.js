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
    case 'BEGIN_GET_TEAMS': {
      return beginState;
    }

    case 'FAILED_GET_TEAMS': {
      return {
        ...failedState,
        errorMessage: action.payload,
      };
    }

    case 'END_GET_TEAMS': {
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
