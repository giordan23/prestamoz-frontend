import { types } from "../types/types";

export const setActiveLoan = (loan) => ({
  type: types.loanActive,
  payload: loan,
});

export const clearActive = () => ({
  type: types.loanClearActive,
});

export const deleteLoan = () => ({
  type: types.loanDelete,
});

export const editLoan = (loan) => ({
  type: types.loanUpdate,
  payload: loan,
});

export const addNewLoan = (loan) => ({
  type: types.loanAddNew,
  payload: loan,
});
