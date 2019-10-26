import { combineReducers } from "redux";
import { findOneCustomers } from "./CustomersReducer";
import { findLoan } from "./LoanReducer";
import { getByCIF } from "./AccountReducer";
const allReducers = combineReducers({
  findOneCustomers,
  getByCIF,
  findLoan
});
export default allReducers;
