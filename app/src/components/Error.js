import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { fetchingData } from '../actions'

const Header = styled.h2`
    margin: 3% auto;
    color: #d45555;
    font-size: 1.7rem;
    width: 100%;
    text-align: center;

    i {
        color: #b92d2d;
    }
`

const Button = styled.button`
    display: block;
    margin: auto;
    background: #d45555;
    color: #fff;
    width: 11%;
    border: 2px solid #d45555;
    border-radius: 5px;
    padding: 1%;

    &:hover {
        cursor: pointer;
        border-color: #c14c4c;
        background: #c14c4c;
    }
`

function Error(props) {
    return (
        <>
            <Header><i class="fas fa-exclamation-circle"></i> {props.data}</Header>
            <Button onClick={() => props.fetchingData()}>Try Again</Button>
        </>
    )
}

export default connect(null, { fetchingData })(Error)