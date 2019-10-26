import { takeLatest, put } from "redux-saga/effects";
import {
  FIND_CUSTOMER,
  FIND_CUSTOMER_ERROR,
  FIND_CUSTOMER_SUCCES,
} from "../actions/CustomersActions";
import { filterFetch } from "../utils/apiUtils"
import { FIND_ALL_ACCOUNT_ERROR } from "../actions/CustomerAccount";


function* findOneCustomers(action) {
  try {
    const data = yield filterFetch('http://192.168.1.13:8080/customer/' + action.cif, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    });
    yield put({
      type: FIND_CUSTOMER_SUCCES,
      data: data
    });
  } catch (error) {
    yield put({
      type: FIND_CUSTOMER_ERROR,
      error: error
    });
  }
}

export function* watchFindOneCustomers() {
  yield takeLatest(FIND_CUSTOMER, findOneCustomers);
}
// async function api() {
//   const response = await Axios.get("http://192.168.1.13:8080/customer/ ");
//   const data = await response;
//   return data;
// }

// async function getOneData(cif) {
//   const response = await Axios.get("http://192.168.1.13:8080/customer/" + cif);
//   const data = await response;
//   return data;
// }

// async function updateCus(cif, param) {
//   const response = await Axios.put(
//     "http://192.168.1.8:8080/customer/" + cif,
//     param
//   );
//   const data = await response;
//   return data;
// }
// function* findCustomers(action) {
//   try {
//     const data = yield api();

//     yield put({
//       type: FIND_ALL_CUSTOMERS_SUCCES,
//       data: data.data.data
//     });
//   } catch (error) {
//     yield put({
//       type: FIND_ALL_CUSTOMERS_ERROR,
//       error: error
//     });
//   }
// }

// function* updateCustomer(action) {
//   try {
//     const data = yield api(action.cif, action.param);

//     yield put({
//       type: UPDATE_CUSTOMER_SUCCES,
//       data: data.data
//     });
//   } catch (error) {
//     yield put({
//       type: UPDATE_CUSTOMER_ERROR,
//       error: error
//     });
//   }
// }

// function* findOneCustomers(action) {
//   try {
//     const data = yield getOneData(action.cif);
//     if (data.data.responseStatus.responseCode != "00") {
//       throw new Error(data.statusText || "unkown error");
//     }

//     yield put({
//       type: FIND_CUSTOMER_SUCCES,
//       data: data.data.data
//     });
//   } catch (error) {
//     yield put({
//       type: FIND_CUSTOMER_ERROR,
//       error: error
//     });
//   }
// }

// export function* watchfindCustomers() {
//   yield takeLatest(FIND_ALL_CUSTOMERS, findCustomers);
// }
// export function* watchfindOneCustomers() {
//   yield takeLatest(FIND_CUSTOMER, findOneCustomers);
// }

// export function* watchupdateCustomers() {
//   yield takeLatest(UPDATE_CUSTOMER, updateCustomer);
// }
