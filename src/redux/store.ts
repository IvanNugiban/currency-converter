import { createStore } from "@reduxjs/toolkit"
import currencyReducer from "./currencyReducer"


const store = createStore(currencyReducer);


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;