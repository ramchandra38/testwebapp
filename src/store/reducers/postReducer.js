
//initialState
const INITIAL_STATE = {
    posts: [],
    payloads:[],
    post: null,
    isFetching: false,
    error: null,
    successMsg: null
}

//postReducer
export const postReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SEARCH_POST':
            const { value } = action;
            const searchPosts = currentState.posts.filter((post) => post.title.toLowerCase().includes(String(value)));
            return {
                ...currentState,
                posts: searchPosts,
                isFetching: false,
                error: null,
                successMsg: null
            };
        case 'FETCH_POSTS_REQUEST':
            return {
                ...currentState,
                posts: [],
                post: null,
                isFetching: true,
                error: null,
                successMsg: null
            }

        case 'FETCH_POSTS_SUCCESS':
            return {
                ...currentState,
                posts: action.posts,
                post: null,
                isFetching: false,
                error: null,
                successMsg: action.message
            }

        case 'FETCH_POSTS_FAILED':
            return {
                ...currentState,
                posts: [],
                post: null,
                isFetching: false,
                error: action.error,
                successMsg: null
            }
            case 'FETCH_PAYLOAD_REQUEST':
                return {
                    ...currentState,
                    payloads: [],
                    post: null,
                    isFetching: true,
                    error: null,
                    successMsg: null
                }

            case 'FETCH_PAYLOAD_SUCCESS':
                return {
                    ...currentState,
                    payloads: action.posts,
                    post: null,
                    isFetching: false,
                    error: null,
                    successMsg: action.message
                }
    
            case 'FETCH_PAYLOAD_FAILED':
                return {
                    ...currentState,
                    payloads: [],
                    post: null,
                    isFetching: false,
                    error: action.error,
                    successMsg: null
                }

        default:
            return currentState;

    }
}
