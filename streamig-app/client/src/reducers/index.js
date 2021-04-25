import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import streamsReducer from './stramsReducer';

export default combineReducers({
  auth: authReducer,
  streams: streamsReducer,
  form: formReducer
});