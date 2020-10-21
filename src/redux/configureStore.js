import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comment';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import { Feedbacks } from './feedback';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            feedbacks: Feedbacks
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}