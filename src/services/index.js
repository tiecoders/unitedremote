import axios from 'axios'
import { globals } from '../config'


const api = axios.create(globals.api)

/**
 * Executes an API request and returns a response
 * @param endpoint
 * @param method
 * @param params
 * @returns {{}}
 */
const makeRequest = (endpoint, method = 'get', params = {}, data = {}, headers = {}) => {
    return api.request({
        url: endpoint,
        method: method,
        headers: {
            ...headers,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params,
        data
    }).then(response => {
        return response.data
    })
};

export default makeRequest;