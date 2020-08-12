import React, { useEffect } from 'react'
import { connect } from "react-redux";

import Post from './Post'
import Loading from './Loading'
import Error from './Error'

import { fetchingData } from '../actions'

function Posts(props) {
    useEffect(() => {
        props.fetchingData()
    }, [])

    return (
        <div>
            Posts Component
            {props.posts.length > 0 && props.posts.map(item => <Post data={item.data} />)}
            {props.isLoading && <Loading />}
            {props.error && <Error data={props.error} />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchingData })(Posts)