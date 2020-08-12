import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background: #333;
    box-shadow: 0 4px 4px 1px #1b1b1b;
    border-radius: 3px;
    margin: 1%;
    padding: 1%;
    text-align: center;
    flex-basis: 28%;

    h1 {
        font-size: 24px;
        margin: 2% 0;
    }

    h4 {
        font-size: 12px;
        margin: 2% 0;
        color: #b3b3b3;
        font-weight: 100;
    }

    img {
        width: 90%;
        margin: 0 auto;
        border-radius: 8px;
    }

    p.none {
        background: #463333;
        color: black;
    }
`

function Post(props) {
    return (
        <Container>
            <h1>{props.data.title}</h1>
            <h4>{props.data.author}</h4>
            {props.data.url.substr(-4, 1) === '.' ? <img src={props.data.url} /> : <p className="none">No Image Available For This Post</p>}
            <p style={{ color: '#516975' }}><i className="fas fa-thumbs-up"></i> {props.data['upvote_ratio'] * 100}%</p>
        </Container>
    )
}

export default Post

