import axios from 'axios'

export const fetchingData = () => dispatch => {
    dispatch({ type: 'FETCHING_DATA' })
    axios.get('https://www.reddit.com/re/memes.json')
        .then(res => {
            dispatch({ type: 'FETCHED_DATA', payload: res.data.data.children })
        })
        .catch(error => {
            dispatch({ type: 'ERROR', payload: error.message })
        })
}