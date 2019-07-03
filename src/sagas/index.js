import { all } from 'redux-saga/effects';
import repositoriesSagas from './repositoriesSagas';

function* appSaga() {
	yield all([
		...repositoriesSagas
	]);
}

export default appSaga;
