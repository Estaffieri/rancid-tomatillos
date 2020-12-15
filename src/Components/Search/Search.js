import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            input: ""
        }
    }
    searchByInput = (e) => {
        e.preventDefault()
        this.setState({input: e.target.value.toLowerCase()})
        this.props.inputValue(e.target.value)
    }
    render() {
        return(
            <input onChange={this.searchByInput} type="text" value={this.state.input} placeholder="Search By Title"></input>
        )
    }
    
}

export default Search;