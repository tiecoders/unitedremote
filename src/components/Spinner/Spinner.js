import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div class="row">
                <div className="spinner-border mx-auto mt-4" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}
