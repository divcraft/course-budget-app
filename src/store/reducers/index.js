import { combineReducers } from 'redux';

import budget from './budget.reducer';
import common from './common.reducer';

export default combineReducers({
   budget,
   common
})