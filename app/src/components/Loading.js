import React from 'react'
import styled from 'styled-components'

const Header = styled.h2`
    margin: 3% auto;
    color: #8e8e8e;
    font-size: 1.7rem;
    width: 100%;
    text-align: center;
`

function Loading() {
    return (
        <Header>Loading...</Header>
    )
}

export default Loading