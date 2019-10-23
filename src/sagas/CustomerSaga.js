import { takeLatest, put, call } from "redux-saga/effects";
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
import Axios from "axios";

async function api() {
  const response = await Axios.get(
    "https://jsonplaceholder.typicode.com/users    "
  );
  const data = await response;
  return data;
}

function* findCustomers(action) {
  try {
    const data = yield api();

    yield put({
      type: FIND_ALL_CUSTOMERS_SUCCES,
      data: data.data
    });
  } catch (error) {
    yield put({
      type: FIND_ALL_CUSTOMERS_ERROR,
      error: error
    });
  }
}

export function* watchfindCustomers() {
  yield takeLatest(FIND_ALL_CUSTOMERS, findCustomers);
}
