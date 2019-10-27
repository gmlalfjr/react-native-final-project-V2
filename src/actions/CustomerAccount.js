export const FIND_ACCOUNT = "FIND_ACCOUNT";
export const FIND_ACCOUNT_SUCCES = "FIND_ACCOUNT_SUCCES";
export const FIND_ACCOUNT_ERROR = "FIND_ACCOUNT_ERROR";

export const FIND_ACCOUNT_NUMBER = "FIND_ACCOUNT_NUMBER";
export const FIND_ACCOUNT_NUMBER_SUCCES = "FIND_ACCOUNT_NUMBER_SUCCES";
export const FIND_ACCOUNT_NUMBER_ERROR = "FIND_ACCOUNT_NUMBER_ERROR";

export function getAccountByCIF(cif) {
  return {
    type: FIND_ACCOUNT,
    cif: cif
  };
}

export function getAccountByAccountNumber(accountNumber) {
  return {
    type: FIND_ACCOUNT_NUMBER,
    accountNumber: accountNumber
  };
}