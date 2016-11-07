import { search, loadingRepos, fetchRepos, receiveRepos, failedRepos, GET_REPOS, RECEIVE_REPOS, FAILED_REPOS } from '../../actions/actionCreators'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import expect from 'expect'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('actions:loadingRepos', () => {
  it('should create a loading repos action', () => {
    const action = loadingRepos();
    expect(action.type).toEqual(GET_REPOS)
  })
})

describe('actions:receiveRepos', () => {
  it('should create a received repos action', () => {
    const userName = 'john';
    const json = { a: 1};
    const action = receiveRepos(userName, json);
    expect(action.type).toEqual(RECEIVE_REPOS)
    expect(action.userName).toEqual(userName)
    expect(action.repos).toEqual(json)
  })
})

describe('actions:failedRepos', () => {
  it('should create a fetch error repos action', () => {
    const userName = 'john';
    const error = 'expected error';
    const action = failedRepos(userName, error);
    expect(action.type).toEqual(FAILED_REPOS)
    expect(action.userName).toEqual(userName)
    expect(action.error).toEqual(error)
  })
})

describe('actions:fetchRepos', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates RECEIVE_REPOS when fetching repos finishes', () => {
    const userName = 'pepe';
    nock(`https://api.github.com/users/${userName}`)
      .get('/repos')
      .reply(200, [1,2,3])

    const expectedActions = [
      { type: RECEIVE_REPOS, repos: [1,2,3], userName: 'pepe' }
    ]
    const store = mockStore({ repos: [] })


    return store.dispatch(fetchRepos('pepe'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('creates FAILED_REPOS when fetching repos returns error', () => {
    const userName = 'pepe';
    nock(`https://api.github.com/users/${userName}`)
      .get('/repos')
      .reply(500, [])

    const expectedActions = [
      { type: FAILED_REPOS, error: 'An error occurred: Internal Server Error', userName: 'pepe' },
      { type: RECEIVE_REPOS, repos: [], userName: 'pepe' }
    ]
    const store = mockStore({ repos: [] })


    return store.dispatch(fetchRepos('pepe'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
