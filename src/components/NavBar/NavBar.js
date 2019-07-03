import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-light">
                <ul className="nav navbar-nav">
                    <li key="home" className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </nav>
        )
    }
}
