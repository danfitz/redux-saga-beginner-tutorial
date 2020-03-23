const { delay, incrementAsync } = require('./sagas')
const { put, call } = require('redux-saga/effects')

describe('incrementAsync saga test', () => {
  const gen = incrementAsync()

  it('should equal delay(1000)', () => {
    expect(gen.next().value).toEqual(call(delay, 1000))
  })

  it('should equal put({ type: "INCREMENT" }', () => {
    expect(gen.next().value).toEqual(put({ type: 'INCREMENT' }))
  })

  it('should complete generator function', () => {
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })
})