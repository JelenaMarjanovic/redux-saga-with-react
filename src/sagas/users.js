import {call, put, fork, takeEvery, takeLatest} from 'redux-saga/effects';
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

function* createUser({payload}) {
  try {
    const {firstName, lastName} = payload;
    yield call(api.createUser, {
      firstName,
      lastName
    });
    yield call(getUsers);
  } catch (e) {

  }
}

function* watchCreateUserRequest(){
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

const userSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest)
]

export default userSagas;