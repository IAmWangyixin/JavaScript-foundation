function createStore(initState) {
  let state = initState
  const listeners = []

  // 订阅
  function subscribe(listener) {
    listeners.push(listener)
  }

  function dispatch(action) {
    state = reducer(state, action)

    // 通知
    listeners.forEach((listener) => {
      listener()
    })
  }

  function getState() {
    return state
  }


  return {
    subscribe,
    dispatch,
    getState
  }
}