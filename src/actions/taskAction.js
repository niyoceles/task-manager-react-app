import {FETCH_TASK, NEW_TASK} from './types';

export function fetchTask(){
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts', )
        .then(res => res.json())
        .then(data => this.setState({ posts: data }));
    }
}