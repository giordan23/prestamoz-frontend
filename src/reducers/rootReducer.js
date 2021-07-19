import { combineReducers } from 'redux';
import loanReducer from './loanReducer';

import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    loans: loanReducer
    // TODO: AuthReducer
    // TODO: CAJA REDUCER
    // TODO: PRESTAMOS REDUCER (loanReducer)
})