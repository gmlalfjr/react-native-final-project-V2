import { takeLatest, put } from "redux-saga/effects";
import {
  FIND_ACCOUNT,
  FIND_ACCOUNT_ERROR,
  FIND_ACCOUNT_SUCCES
} from "../actions/CustomerAccount";
import { filterFetch } from "../utils/apiUtils";
import { url } from "../utils/api";

function* getAccountByCIF(action) {
  try {
    const data = yield filterFetch(url + '/account/cif?cif=' + action.cif, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    });
    yield put({
      type: FIND_ACCOUNT_SUCCES,
      data: data
    });
  } catch (error) {
    yield put({
      type: FIND_ACCOUNT_ERROR,
      error: error
    });
  }
}

export function* watchgetAccountByCIF() {
  yield takeLatest(FIND_ACCOUNT, getAccountByCIF);
}







// import Axios from "axios";

// async function ApiGetAccountByCIF(cif) {
//   const response = await Axios.get(
//     "http://192.168.1.16:8080/account/cif?cif=" + cif
//   );
//   const data = await response;
//   return data;
// }

// function* getAccountByCIF(action) {
//   try {
//     const data = yield ApiGetAccountByCIF(action.cif);

//     yield put({
//       type: FIND_ACCOUNT_SUCCES,
//       data: data.data.data
//     });
//   } catch (error) {
//     yield put({
//       type: FIND_ACCOUNT_ERROR,
//       error: error
//     });
//   }
// }

// export function* watchgetAccountByCIF() {
//   yield takeLatest(FIND_ALL_ACCOUNT, getAccountByCIF);
// }
