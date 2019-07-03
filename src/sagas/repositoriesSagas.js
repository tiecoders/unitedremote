import { delay } from 'redux-saga/effects'
import { takeEvery, call, put } from 'redux-saga/effects'
import { getTimeout } from '../services/helpers'

import {
    GET_REPOSITORIES_LIST_REQUESTED,
    GET_REPOSITORIES_LIST_SUCCEEDED,
    GET_REPOSITORIES_LIST_FAILED
} from '../actions/repositoriesActions';

import { apiGetRepositories } from '../services/repositoriesAPI'

function* getRepositories(action) {
    const startingTime = Date.now();

    try {
        const response = yield call(apiGetRepositories, action);
        yield delay(getTimeout(startingTime, 1000));
        yield put({ type: GET_REPOSITORIES_LIST_SUCCEEDED, repositories: response.items });
    } catch (e) {
        yield delay(getTimeout(startingTime, 1000));
        yield put({ type: GET_REPOSITORIES_LIST_FAILED, message: e.message });
    }
}

const repositoriesSagas = [
    takeEvery(GET_REPOSITORIES_LIST_REQUESTED, getRepositories)
];

export default repositoriesSagas;

export { getRepositories };
