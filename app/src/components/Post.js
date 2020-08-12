import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background: #fff;
    border: 1px solid black;
    margin: 1% auto;
    text-align: center;
    width: 50%;

    h1 {
        font-size: 24px;
        margin: 2% 0;
    }

    h4 {
        font-size: 18px;
        margin: 2% 0;
    }

    img {
        width: 90%;
        margin: 0 auto;
        border-radius: 8px;
    }
`

function Post(props) {
    return (
        <Container>
            <h1>{props.data.title}</h1>
            <h4>{props.data.author}</h4>
            <img src={props.data.url} />
            <p><i class="fas fa-thumbs-up"></i> {props.data['upvote_ratio'] * 100}%</p>
        </Container>
    )
}

export default Post

