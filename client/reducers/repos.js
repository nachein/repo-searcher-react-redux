import { GET_REPOS, RECEIVE_REPOS, FAILED_REPOS } from '../actions/actionCreators';

function repos(state = { loading: false, items: [], error: ''}, action) {
  switch(action.type) {
    case GET_REPOS:
      return Object.assign({}, state, {
        loading: true,
        items: [],
        error: ''
      });
    case RECEIVE_REPOS:
      let repos = action.repos;
      return Object.assign({}, state, {
        loading: false,
        items: repos,
        error: ''
      });
    case FAILED_REPOS:
      return Object.assign({}, state, {
        loading: false,
        items: [],
        error: action.error
      });
    default:
      return state;
  }
}

export default repos;
