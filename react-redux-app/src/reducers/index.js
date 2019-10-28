import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
  data: [],
  isFetching: false,
  error: ''
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        data: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

export default rootReducer;
