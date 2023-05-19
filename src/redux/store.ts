import currencyReducer from "./currencyReducer"
import { createStore, applyMiddleware  } from "redux";
import thunk from 'redux-thunk';


const store = createStore(currencyReducer, applyMiddleware(thunk));;


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;