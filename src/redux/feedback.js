import * as ActionTypes from './ActionTypes';


export const Feedbacks = (state = {
    errMess: null,
    feedbacks: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            // comment.id = state.comments.length;
            // comment.date = new Date().toISOString();
            return {...state, feedbacks: state.feedbacks.concat(feedback)};
        default:
            return state
    }
};