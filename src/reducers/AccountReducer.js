import {
  FIND_ACCOUNT,
  FIND_ACCOUNT_ERROR,
  FIND_ACCOUNT_SUCCES,
  FIND_ACCOUNT_NUMBER,
  FIND_ACCOUNT_NUMBER_SUCCES,
  FIND_ACCOUNT_NUMBER_ERROR
} from "../actions/CustomerAccount";

const initFindOneState = {
  data: [],
  loading: false,
  error: null
};
export function getByCIF(state = initFindOneState, action) {
  console.log(action);
  switch (action.type) {
    case FIND_ACCOUNT:
      return {
        ...initFindOneState,
        loading: true,
        error: null
      };
    case FIND_ACCOUNT_SUCCES:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null
      };
    case FIND_ACCOUNT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function getByAccountNumber(state = initFindOneState, action) {
  console.log(action);
  switch (action.type) {
    case FIND_ACCOUNT_NUMBER:
      return {
        ...initFindOneState,
        loading: true,
        error: null
      };
    case FIND_ACCOUNT_NUMBER_SUCCES:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null
      };
    case FIND_ACCOUNT_NUMBER_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}