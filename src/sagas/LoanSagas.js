import { takeLatest, put } from "redux-saga/effects";
import {
  FIND_LOAN,
  FIND_LOAN_ERROR,
  FIND_LOAN_SUCCES,
} from "../actions/LoanAction";
import { filterFetch } from "../utils/apiUtils";


function* findLoan(action) {
  try {
    const data = yield filterFetch('http://192.168.1.16:8080/loan/' + action.accountNumber, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    });
    yield put({
      type: FIND_LOAN_SUCCES,
      data: data
    });
  } catch (error) {
    yield put({
      type: FIND_LOAN_ERROR,
      error: error
    });
  }
}

export function* watchFindLoan() {
  yield takeLatest(FIND_LOAN, findLoan);
}
