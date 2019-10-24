export const FIND_ALL_CUSTOMERS = "FIND_ALL_CUSTOMERS";
export const FIND_ALL_CUSTOMERS_SUCCES = "FIND_ALL_CUSTOMERS_SUCCES";
export const FIND_ALL_CUSTOMERS_ERROR = "FIND_ALL_BOOKS_ERROR";

export const FIND_CUSTOMER = "FIND_CUSTOMER";
export const FIND_CUSTOMER_SUCCES = "FIND_CUSTOMER_SUCCES";
export const FIND_CUSTOMER_ERROR = "FIND_CUSTOMER_ERROR";

export const POST_CUSTOMER = "POST_CUSTOMER";
export const POST_CUSTOMER_SUCCES = "POST_CUSTOMER_SUCCES";
export const POST_CUSTOMER_ERROR = "POST_CUSTOMER_ERROR";

export const UPDATE_CUSTOMER = "UPDATE_CUSTOMER";
export const UPDATE_CUSTOMER_SUCCES = "UPDATE_CUSTOMER_SUCCES";
export const UPDATE_CUSTOMER_ERROR = "UPDATE_CUSTOMER_ERROR";

export const DELETE_CUSTOMER = "DELETE_CUSTOMER";
export const DELETE_CUSTOMER_SUCCES = "DELETE_CUSTOMER_SUCCES";
export const DELETE_CUSTOMER_ERROR = "DELETE_CUSTOMER_ERROR";

export const SEARCH_CUSTOMER = "SEARCH_CUSTOMER";
export const SEARCH_CUSTOMER_SUCCES = "SEARCH_CUSTOMER_SUCCES";
export const SEARCH_CUSTOMER_ERROR = "SEARCH_STUDENT_ERROR";

// export const GET_CIF_CUSTOMER = "GET_CIF_CUSTOME";
// export const GET_CIF_CUSTOMER_SUCCES = "GET_CIF_CUSTOMER_SUCCES";
// export const GET_CIF_CUSTOMER_ERROR = "GET_CIF_CUSTOMER_ERROR";

export function findAllCustomers() {
  return {
    type: FIND_ALL_CUSTOMERS
  };
}

export function findOneCustomers(cif) {
  return {
    type: FIND_CUSTOMER,
    cif: cif
  };
}

export function updateCustomers(cif, param) {
  return {
    type: FIND_CUSTOMER,
    cif: cif,
    param: param
  };
}

// export function getCustomerByCif(cif) {
//   return {
//     type: GET_CIF_CUSTOMER,
//     cif: cif
//   };
// }
