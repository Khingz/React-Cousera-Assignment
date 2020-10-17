import * as ActionTypes from './ActionTypes';


export const Comments = (state = {
    errMess: null,
    comments: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return ({...state, isLoading: false, errrmess: null, comments: action.payload});

             case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errrMess: null, dishes: []};

            case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errrMess: action.payload, comments: []};

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            // comment.id = state.comments.length;
            // comment.date = new Date().toISOString();
            return {...state, comments: state.comments.concat(comment)};
        default:
            return state
    }
};