import { types } from "../types/types";

const initialState = {
  loans: [
    {
      id: 1,
      qty: 1,
      capital: 150,
      interes: 4,
      tipo: "Lavadora",
      marca: "LG",
      modelo: "ASDWQ",
      observacion: "siempre el mejor",
    },
    {
      id: 2,
      qty: 2,
      capital: 950,
      interes: 4,
      tipo: "Refrigeradora",
      marca: "Samsung",
      modelo: "ASDWQ",
      observacion: "siempre el mejor 2",
    },
    {
      id: 3,
      qty: 12,
      capital: 750,
      interes: 4,
      tipo: "Monitor",
      marca: "Samsung",
      modelo: "ASDWQ",
      observacion: "siempre el mejor 3",
    },
  ],
  activeLoan: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.loanAddNew:
      return { ...state, loans: [payload, ...state.loans] };

    case types.loanActive:
      return {
        ...state,
        activeLoan: payload,
      };

    case types.loanClearActive:
      return {
        ...state,
        activeLoan: null,
      };

    case types.loanDelete:
      return {
        ...state,
        loans: state.loans.filter((l) => l.id !== state.activeLoan.id),
        activeLoan: null,
      };
    case types.loanUpdate: 
      return {
        ...state,
        loans: state.loans.map((l) => ( l.id === payload.id ) ? payload : l)
    }

    default:
      return state;
  }
};
