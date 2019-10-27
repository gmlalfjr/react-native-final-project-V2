import { takeLatest, put } from "redux-saga/effects";
import {
  FIND_BILLING,
  FIND_BILLING_ERROR,
  FIND_BILLING_SUCCES,
} from "../actions/BiliingAction";
import { filterFetch } from "../utils/apiUtils";


function* findBilling(action) {
  try {
    const data = yield filterFetch('http://192.168.1.16:8080/billing/loanId?loanId=' + action.loanId, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    });
    yield put({
      type: FIND_BILLING_SUCCES,
      data: data
    });
  } catch (error) {
    yield put({
      type: FIND_BILLING_ERROR,
      error: error
    });
  }
}

export function* watchFindBilling() {
  yield takeLatest(FIND_BILLING, findBilling);
}
