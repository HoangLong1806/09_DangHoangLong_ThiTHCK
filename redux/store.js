import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

console.log(store)
console.log(store.getState());
export default store;