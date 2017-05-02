import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};

const reducer = (state=initialState, action) => {
  switch (action.type){
    case "FETCH_USERS_START" : {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_USERS_ERROR" : {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "RECEIVE_USERS" : {
      return {
        ...state, 
        fetching: false, 
        fetched: true, 
        users: action.payload
      }
      break;
    }
  }
  return state
}
/* eslint-disable no-underscore-dangle */
//const devToolEx = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = applyMiddleware(thunk, createLogger())
const store = createStore(reducer, middleware);
/* eslint-enable */
store.dispatch((dispatch) => {
  dispatch({type: "FETCH_USERS_START"})
  axios.get("http://rest.learncode.academy/api/wstern/users")
  .then((response) => {
    dispatch({type: "RECEIVE_USERS", payload: response.data})
  })
  .catch((err) => {
    dispatch({type: "FETCH_USERS_ERROR", payload: err})
  })
})