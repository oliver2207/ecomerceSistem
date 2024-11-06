import { createStore, applyMiddleware } from 'redux';
import * as reduxThunk from 'redux-thunk';  
import rootReducer from './redux/reducers'
import { composeWithDevTools } from '@redux-devtools/extension';

const initialState = {};

const middleware = [reduxThunk.thunk];

const store = createStore(
    rootReducer,
    initialState,
    // applyMiddleware(...middleware)
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;