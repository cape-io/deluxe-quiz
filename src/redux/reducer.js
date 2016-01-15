import * as ActionTypes from './actions'
import merge from 'lodash/merge'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import db from './modules/db'
import quiz from './modules/quiz'

// Updates an entity cache in response to any action with response.entities.
// Define our default entities collection database.
const defaultEntityState = {
  forms: {},
  repos: {},
  users: {},
}
function entities(state = defaultEntityState, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }
  return state
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}

const rootReducer = combineReducers({
  db,
  entities,
  errorMessage,
  form: formReducer,
  quiz,
})

export default rootReducer
