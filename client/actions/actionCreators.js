import fetch from 'isomorphic-fetch';

export const GET_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';
export const FAILED_REPOS = 'FAILED_REPOS';

export function search(userName) {
  return dispatch => {
    dispatch(loadingRepos());
    dispatch(fetchRepos(userName));
  }
}

export function loadingRepos() {
  return {
    type: GET_REPOS
  }
}

export function fetchRepos(userName) {
  return dispatch => {
    return fetch(`https://api.github.com/users/${userName}/repos`)
      .then(response => {
        if(response.status >= 400) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(repos => dispatch(receiveRepos(userName, repos)))
      .catch(ex => {
        dispatch(failedRepos(userName, ex.message))
      })
  }
}

export function receiveRepos(userName, json) {
  return {
    type: RECEIVE_REPOS,
    userName,
    repos: json
  }
}

export function failedRepos(userName, error) {
  return {
    type: FAILED_REPOS,
    userName,
    error
  }
}
