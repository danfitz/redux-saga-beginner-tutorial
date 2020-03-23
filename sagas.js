const { put, call, takeEvery, all } = require('redux-saga/effects')

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function* helloSaga() {
  console.log('Hello Sagas!')
}

function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}


module.exports = {
  delay,
  helloSaga,
  incrementAsync,
  rootSaga
}