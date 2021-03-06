export const GET_REPOSITORIES_LIST_REQUESTED = '@@TIECODERS/GET_REPOSITORIES_LIST_REQUESTED';
export const GET_REPOSITORIES_LIST_SUCCEEDED = '@@TIECODERS/GET_REPOSITORIES_LIST_SUCCEEDED';
export const GET_REPOSITORIES_LIST_FAILED = '@@TIECODERS/GET_REPOSITORIES_LIST_FAILED';

export function getRepositoriesAction(date, page) {
    return { type: GET_REPOSITORIES_LIST_REQUESTED, date: date, page: page };
}