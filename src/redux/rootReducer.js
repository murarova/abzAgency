import { combineReducers } from 'redux';
import dropDownReducer from './reducers/dropDownReducer';

const rootReducer = combineReducers({
    dropDown: dropDownReducer,
});

export default rootReducer;
