import axios from 'axios'

export const fetchingData = (value = 'memes') => dispatch => {
    dispatch({ type: 'FETCHING_DATA' })
    axios.get(`https://www.reddit.com/r/${value}.json`)
        .then(res => {
            dispatch({ type: 'FETCHED_DATA', payload: res.data.data.children })
        })
        .catch(error => {
            dispatch({ type: 'ERROR', payload: error.message })
        })
}