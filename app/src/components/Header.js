import React from 'react'
import styled from 'styled-components'

import Input from './Input'

const H1 = styled.h1`
    background: #1f1f1f;
    margin: 0;
    padding: 1%;
    text-align: center;
    color: #fff;
`

function Header(props) {
    return (
        <>
            <H1>Reddit API App</H1>
            <Input />
        </>
    )
}

export default Header