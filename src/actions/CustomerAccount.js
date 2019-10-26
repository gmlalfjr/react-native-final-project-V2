
export const FIND_ACCOUNT = "FIND_ACCOUNT";
export const FIND_ACCOUNT_SUCCES = "FIND_ACCOUNT_SUCCES";
export const FIND_ACCOUNT_ERROR = "FIND_ACCOUNT_ERROR";

export function getAccountByCIF(cif) {
  return {
    type: FIND_ACCOUNT,
    cif: cif
  };
}
