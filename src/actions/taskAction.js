import { FETCH_TASKS, NEW_TASK } from './types';

export const fetchTask = () => dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => 
            dispatch({
                type:FETCH_TASKS,
                payload: posts
            })
            );
    };



 export const createPost = (postData)=> dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
              Accept: 'application/json, text/plain, */*',
              // 'access-token': token,
              'Content-type': 'application/json',
            },
            body: JSON.stringify(postData),
          })
          .then(res => res.json())
          .then((post) => dispatch({
            type: NEW_TASK,
            payload: post
        }));
    };

    


