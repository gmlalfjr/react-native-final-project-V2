import { combineReducers } from "redux";
import {
  findOneCustomers
} from "./CustomersReducer";
import { getByCIF } from "./AccountReducer";
const allReducers = combineReducers({
  findOneCustomers,
  getByCIF
});
export default allReducers;
