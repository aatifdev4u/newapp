import { combineReducers } from 'redux';
import taskStore from './task_reducer'

const rootReducer = combineReducers({
    taskStore
});

export default rootReducer;