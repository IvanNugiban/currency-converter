import currencyReducer from "./currencyReducer"
import { createStore } from "redux"

const store = createStore(currencyReducer);


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;