import {
  DELETE_CUSTOMER,
  DELETE_CUSTOMER_ERROR,
  DELETE_CUSTOMER_SUCCES,
  FIND_ALL_CUSTOMERS,
  FIND_ALL_CUSTOMERS_ERROR,
  FIND_ALL_CUSTOMERS_SUCCES,
  FIND_CUSTOMER,
  FIND_CUSTOMER_ERROR,
  FIND_CUSTOMER_SUCCES,
  POST_CUSTOMER,
  POST_CUSTOMER_ERROR,
  POST_CUSTOMER_SUCCES,
  SEARCH_CUSTOMER,
  SEARCH_CUSTOMER_ERROR,
  SEARCH_CUSTOMER_SUCCES,
  UPDATE_CUSTOMER,
  UPDATE_CUSTOMER_ERROR,
  UPDATE_CUSTOMER_SUCCES
} from "../actions/CustomersActions";

const initFindAllState = {
  data: [],
  loading: false
};
export function findAllCustomers(state = initFindAllState, action) {
  console.log(action);
  switch (action.type) {
    case FIND_ALL_CUSTOMERS:
      return {
        ...initFindAllState,
        loading: true,
        error: null
      };
    case FIND_ALL_CUSTOMERS_SUCCES:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null
      };
    case FIND_ALL_CUSTOMERS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
