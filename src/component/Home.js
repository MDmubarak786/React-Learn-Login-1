import React, { Component } from 'react'

import { Switch, Route, Link } from "react-router-dom";
export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>

                <Link to="/Login"><h1>Login Page</h1></Link>
            </div>
        )
    }
}