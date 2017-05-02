import { applyMiddleware, createStore, compose } from "redux"

import { createLogger } from "redux-logger";
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"
/* eslint-disable no-underscore-dangle */
const middleware = compose(
      applyMiddleware(promise(), thunk, createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )

export default createStore(reducer, middleware)
/* eslint-enable */