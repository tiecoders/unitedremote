import React, { Component } from 'react'
import { Badge } from '../Badge';

export default class Repository extends Component {
    render() {
        const {
            repository
        } = this.props

        return (
            <div className="card mt-2">
                <div className="card-body">
                    <div class="row">
                        <div className="col-md-2">
                            <img src={repository.owner.avatar_url} class="card-img-top" alt={repository.owner.full_name} />
                        </div>
                        <div className="col-md-10">
                            <h5 className="card-title">{repository.name}</h5>
                            <p className="card-text">{repository.description}</p>
                            <div>
                                <Badge type={'primary'} label={'Stars'} count={repository.stargazers_count} />
                                {repository.has_issues && (
                                    <Badge type={'danger'} label={'Issues'} count={repository.open_issues_count} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
