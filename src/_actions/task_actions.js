import {
    ADD_TASK,
    ADD_SEARCH_TERM
} from './types'

export function addTask(task){
    return {
        type: ADD_TASK,
        payload: task
    }
}
export function addSearchTerm(searchterm){
    return {
        type: ADD_SEARCH_TERM,
        payload: searchterm
    }
}
