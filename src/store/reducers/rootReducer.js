
import { routerReducer as routing } from 'react-router-redux';
import {postReducer} from './postReducer';
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

//rootReducer
const rootReducer = combineReducers({
  postState:postReducer,
  form: formReducer,
  routing
});

export default rootReducer
// the key name will be the data property on the state object