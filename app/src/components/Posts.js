import React, { useEffect } from 'react'
import { connect } from "react-redux";
import styled from 'styled-components'

import Post from './Post'
import Loading from './Loading'
import Error from './Error'

import { fetchingData } from '../actions'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

function Posts(props) {
    useEffect(() => {
        props.fetchingData()
    }, [])

    return (
        <Container>
            {props.posts.length > 0 && props.posts.filter(item => item.data.url.substr(-4, 1) === '.').map(item => <Post data={item.data} />)}
            {props.isLoading && <Loading />}
            {props.error && <Error data={props.error} />}
        </Container>
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