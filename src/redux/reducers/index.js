import { combineReducers } from 'redux';
import { tags } from './tags';
import {rows} from './rows'

export default combineReducers({
    tags,
    rows
})
