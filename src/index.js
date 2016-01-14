import React from 'react'
import { render } from 'react-dom'
// Add the latest es2016+ stuff that we love.
import 'babel-polyfill'
import 'isomorphic-fetch'

// Root React component.
import Root from './containers/Root'
import configureStore from './redux/configureStore'

// Define our destination where we insert our root react component.
const destEl = document.getElementById('root')

// Define our inital state object. This could be a fetch() to an API endpoint.
fetch('/data.json', {
  headers: {
    Accept: 'application/json',
  },
  method: 'get',
})
.then(response =>
  response.json()
)
.then(json => {
  const initialState = { db: json }
  // Configure and create our Redux store.
  const store = configureStore(initialState)
  // The root component needs the Redux `store` and router history as props.
  render(<Root store={store} history={history} />, destEl)
})
