export const initialState = {
    posts: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHING_DATA':
            return {
                posts: [],
                isLoading: true,
                error: ''
            }
        case 'FETCHED_DATA':
            return {
                isLoading: false,
                posts: action.payload,
                error: ''
            }
        case 'ERROR':
            return {
                isLoading: false,
                posts: [],
                error: action.payload
            }
        default:
            return state
    }
}