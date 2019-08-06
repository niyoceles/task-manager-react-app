import { FETCH_TASKS, NEW_TASK } from '../actions/types'

const initialState ={
    items :[],
    item :{}
};

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TASKS:
            return {
                ...state,
                items:action.payload
            };
        case NEW_TASK:
            return {
                ...state,
                item:action.payload
            };
        default:
            return state
    }
}