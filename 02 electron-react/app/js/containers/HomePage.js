import React, { Component } from 'react'
import { Link } from 'react-router'

export default class HomePage extends Component {

    render() {
        return(
            <div>
                <h1> Home Page</h1>
                <h2>
                    <Link to='/counter'> Counter Page </Link>
                </h2>
            </div>
        )
    }
}
