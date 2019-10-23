import { combineReducers } from "redux";
import { findAllCustomers } from "./CustomersReducer";
const allReducers = combineReducers({
  findAllCustomers
});
export default allReducers;
