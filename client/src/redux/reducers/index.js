import { combineReducers } from 'redux';

import boards from './boards';
import cards from './cards';

const rootReducer = combineReducers({
    boards,
    cards
});

export default rootReducer;