export const FIND_ALL_ACCOUNT = "FIND_ALL_ACCOUNT";
export const FIND_ALL_ACCOUNT_SUCCES = "FIND_ALL_ACCOUNT_SUCCES";
export const FIND_ALL_ACCOUNT_ERROR = "FIND_ALL_ACCOUNT_ERROR";

export const FIND_ACCOUNT = "FIND_ACCOUNT";
export const FIND_ACCOUNT_SUCCES = "FIND_ACCOUNT_SUCCES";
export const FIND_ACCOUNT_ERROR = "FIND_ACCOUNT_ERROR";

export function getAccountByCIF(cif) {
  return {
    type: FIND_ALL_ACCOUNT,
    cif: cif
  };
}
