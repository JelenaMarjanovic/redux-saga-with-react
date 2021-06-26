import {call, put, fork, take, takeEvery, takeLatest} from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../services/users';

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    yield put(actions.getUsersSuccess({
      users: result.data.data
    }));
  } catch (e) {
    yield put(actions.usersError({
      error: 'An error occurred when trying to get the list of users.'
    }));
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
    yield put(actions.usersError({
      error: 'An error occurred when trying to create the user.'
    }));
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

function* deleteUser({userId}) {
  try {
    yield call(api.deleteUser, userId);
    yield call(getUsers);
  } catch (e) {
    yield put(actions.usersError({
      error: 'An error occurred when trying to delete the user.'
    }));
  }
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(actions.Types.DELETE_USER_REQUEST);
    const {userId} = action.payload;
    yield call(deleteUser, {
      userId
    });
  }
}

const userSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest)
]

export default userSagas;