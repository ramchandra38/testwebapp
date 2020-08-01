
import axios from 'axios';


// Search Actions
export const searchPost = (value) => {
  return {
    type: 'SEARCH_POST',
    value
  };
}

export const fetchPosts = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchPostsRequest());
    // Returns a promise
    return fetch('https://api.spacexdata.com/v3/history')
        .then(response => {
          if (response.ok) {
            response.json().then(data => {
              dispatch(fetchPostsSuccess(data));
            })
          }
          else {
            response.json().then(error => {
              dispatch(fetchPostsFailed(error));
            })
          }
        })
  }
}

export const fetchPayloads = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time

  return (dispatch) => {
    dispatch(fetchPayloadRequest());
    // Returns a promise
    return fetch('https://api.spacexdata.com/v3/payloads')
        .then(response => {
          if (response.ok) {
            response.json().then(data => {
              console.log('pay');
              dispatch(fetchPayloadSuccess(data));
            })
          }
          else {
            response.json().then(error => {
              dispatch(fetchPayloadFailed(error));
            })
          }
        })
  }
}

export const fetchPostsRequest = () => {
  return {
    type: 'FETCH_POSTS_REQUEST'
  }
}

export const fetchPayloadRequest = () => {
  return {
    type: 'FETCH_PAYLOAD_REQUEST'
  }
}

export const fetchPostsSuccess = (posts, message) => {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    posts: posts,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchPostsFailed = (error) => {
  return {
    type: 'FETCH_POSTS_FAILED',
    error
  }
}

export const fetchPayloadSuccess = (payloads, message) => {
  console.log('payloads', payloads);
  return {
   
    type: 'FETCH_PAYLOAD_SUCCESS',
    posts: payloads,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchPayloadFailed = (error) => {
  return {
    type: 'FETCH_PAYLOAD_FAILED',
    error
  }
}

export const fetchPostRequest = () => {
  return {
    type: 'FETCH_POST_REQUEST'
  }
}

export const fetchPostSuccess = (post, message) => {
  return {
    type: 'FETCH_POST_SUCCESS',
    post: post,
    message: message,
    receivedAt: Date.now
  }
}

