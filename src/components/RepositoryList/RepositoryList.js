import React, { Component } from 'react'
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRepositoriesAction } from '../../actions/repositoriesActions'
import { getLast30DaysDate } from '../../services/helpers'
import { Spinner } from '../Spinner';
import { Alert } from '../Alert';
import { Repository } from '../Repository';
import BottomScrollListener from 'react-bottom-scroll-listener';

class RepositoryList extends Component {

    componentDidMount = () => {
        this.retrieveMore()
    }

    retrieveMore = () => {
        const {
            getRepositories,
            repositories: {
                current_page,
                fetching
            }
        } = this.props

        if (current_page !== null && fetching === false) {
            getRepositories(getLast30DaysDate(), current_page)
        }
    }

    render() {

        let rendered = (<div></div>)

        const {
            fetching,
            error,
            repositories
        } = this.props.repositories

        if (repositories.length > 0) {
            rendered = [
                <div>
                    {repositories.map(repository => (
                        <Repository repository={repository} />
                    ))}
                </div>,
                <BottomScrollListener onBottom={() => { this.retrieveMore() }} />
            ]
        }

        if (fetching) {
            rendered = [rendered, <Spinner />]
        } else if (error !== false) {
            rendered = [rendered, <Alert message={'Error occcurend while retrieving repositories'} type={'danger'} />]
        }

        return rendered
    }
}

const mapStateToProps = state => ({
    repositories: state.repositories
})

const mapDispatchToProps = dispatch => ({
    getRepositories: bindActionCreators(getRepositoriesAction, dispatch)
})

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)

export default enhance(RepositoryList);