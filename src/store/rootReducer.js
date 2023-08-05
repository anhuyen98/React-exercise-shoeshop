import { combineReducers } from 'redux'
import { btShoeReducer } from './reducer'

export const rootReducer = combineReducers({
    btShoeRedux: btShoeReducer,
})