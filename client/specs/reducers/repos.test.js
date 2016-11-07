import repos from '../../reducers/repos'
import { GET_REPOS, RECEIVE_REPOS, FAILED_REPOS } from '../../actions/actionCreators';

describe('repos reducer', () => {
  it('should return the initial state', () => {
    expect(
      repos(undefined, {})
    ).toEqual(
      {
        loading: false,
        items: [],
        error: ''
      }
    )
  })

  it('should handle GET_REPOS', () => {
    expect(
      repos(undefined, { type: GET_REPOS, userName: 'pepe' })
    ).toEqual(
      {
        loading: true,
        items: [],
        error: ''
      }
    )
  })

  it('should handle RECEIVE_REPOS', () => {
    expect(
      repos(undefined, { type: RECEIVE_REPOS, userName: 'pepe', repos: [1,2,3] })
    ).toEqual(
      {
        loading: false,
        items: [1,2,3],
        error: ''
      }
    )
  })

  it('should handle FAILED_REPOS', () => {
    expect(
      repos(undefined, { type: FAILED_REPOS, userName: 'pepe', error: 'some error' })
    ).toEqual(
      {
        loading: false,
        items: [],
        error: 'some error'
      }
    )
  })
})
