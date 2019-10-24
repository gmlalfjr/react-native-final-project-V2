import { combineReducers } from "redux";
import {
  findAllCustomers,
  findOneCustomers,
  updateCustomer
} from "./CustomersReducer";
import { getByCIF } from "./AccountReducer";
const allReducers = combineReducers({
  findAllCustomers,
  findOneCustomers,
  updateCustomer,
  getByCIF
});
export default allReducers;
