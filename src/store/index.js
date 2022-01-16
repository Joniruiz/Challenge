import {createStore , combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducer from '../reducers/reducer';

const rootReducer = combineReducers({
    bands: reducer
})

export default function generateStore(){
    const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
    return store
}