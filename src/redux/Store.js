import {createStore, combineReducers} from 'redux';
import TonaraReducer from './reducer/TonaraReducer';

const rootReducer = combineReducers({
    TonaraReducer: TonaraReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;