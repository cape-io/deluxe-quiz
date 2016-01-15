import reduce from 'lodash/reduce'

const SET_SCORE = 'quiz/SET_RESULT'

const defaultState = {
  showResult: false,
  score: 0,
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SCORE:
      return { ...state, showResult: true, score: action.payload }
    default:
      return state
  }
}

export function handleSubmit(data) {
  function reduceFunc(result, value) {
    return result + parseInt(value, 10)
  }
  return {
    type: SET_SCORE,
    payload: reduce(data, reduceFunc, 0),
  }
}
