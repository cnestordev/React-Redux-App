import React, { useState } from 'react'
import { fetchingData } from '../actions'
import { connect } from "react-redux";
import styled from 'styled-components'

const Form = styled.form`
    text-align: center;

    input {
        background: #545454;
        color: black;
        border: none;
        padding: 0.5%;
        margin-right: 1%;
        width: 15%;
    }

    button {
        border: 1px solid #6b6b6b;
        background: #6b6b6b;
        padding: 0.5%;
        color: black;
    }

    button:disabled {
        background: black;
        border-color: black;
        color: gray;
    }
`

function Input(props) {
    const [query, setQuery] = useState('')

    const handleChange = e => {
        setQuery(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.fetchingData(query)
        setQuery('')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={query} type="text" placeholder="search" />
            <button disabled={props.isLoading}>Search</button>
        </Form>
    )
}

const mapStateToProps = state => ({ isLoading: state.isLoading })

export default connect(mapStateToProps, { fetchingData })(Input)