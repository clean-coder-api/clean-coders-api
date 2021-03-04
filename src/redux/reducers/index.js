import { combineReducers } from 'redux';
import { tags } from './tags';
import {allRows} from './rows'

export default combineReducers({
    tags,
    allRows
})
