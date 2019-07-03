import makeRequest from './index'

const apiGetRepositories = ({ date, page }) => makeRequest(
    `/search/repositories`,
    'get',
    {
        q: `created:>${date}`,
        sort: 'stars',
        order: 'desc',
        page: page
    }
)

export {
    apiGetRepositories
}
