import {call, put, fork, takeEvery} from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../services/users';

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    yield put(actions.getUsersSuccess({
      users: result.data.data
    }));
  } catch (e) {

  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const userSagas = [
  fork(watchGetUsersRequest)
]

export default userSagas;