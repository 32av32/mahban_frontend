import {combineReducers, legacy_createStore as createStore} from 'redux';

import productsReducer from './products_reducer';
import productReducer from './product_reducer';


const reducers = combineReducers({
    products: productsReducer,
    product: productReducer,
})

const store = createStore(reducers);

export default store;

window.store = store;