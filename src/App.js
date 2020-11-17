import React from 'react'
import Routes from './routes/Index'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers/Index'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

const App = () => {

  return(
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  )
}

export default App