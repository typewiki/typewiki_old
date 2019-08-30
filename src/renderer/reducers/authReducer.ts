import { clientLogin } from '../routines';

const initialState = {
  data: null,
  loading: false,
  error: null
};

export default function exampleReducer(state = initialState, action: any) {
  switch (action.type) {
    case clientLogin.TRIGGER:
      return {
        ...state,
        loading: true
      };
    case clientLogin.SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case clientLogin.FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case clientLogin.FULFILL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}