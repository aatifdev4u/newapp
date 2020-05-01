import {
   ADD_TASK,
   ADD_SEARCH_TERM
} from '../_actions/types';
 
const intialState = {
    tasks : [],
    searchTerm: ''
}
export default function(state=intialState,action){
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case ADD_SEARCH_TERM:
            return  {
                ...state,
                searchTerm: action.payload
            }
        // case DELETE_DEPLOYMENT:
        //     return {
        //         ...state,
        //         deploymentList: state.deploymentList.filter((deployment) => deployment._id !== action.payload)
        //     }
        default:
            return state;
    }
}