import { combineReducers } from 'redux'

import repositoriesReducer from './repositoriesReducer'

const coreReducer = combineReducers({
	repositories: repositoriesReducer
});

export default coreReducer;
