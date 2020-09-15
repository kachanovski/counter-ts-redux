import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    counter:counterReducer,
    form: formReducer
})

export type StoreReduxType = ReturnType<typeof reducers>

const store = createStore(reducers)

export default store
// @ts-ignore
window.store = store