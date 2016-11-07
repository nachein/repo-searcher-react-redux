import React from 'react'
import { shallow } from 'enzyme'
import RepoList from '../../components/RepoList'

function setup(repos) {

  const params = { userName: 'lala' }
  const props = { repos: repos, search: jest.fn(), params: params};
  const enzymeWrapper = shallow(<RepoList {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components: RepoList', () => {
  it('should render loading state', () => {
    const { enzymeWrapper } = setup({loading: true, items: [], error: ''})

    expect(enzymeWrapper.find('LinearProgress').hasClass('loading-bar')).toBe(true)
    expect(enzymeWrapper.find('p.error-msg').length).toBe(0)
    expect(enzymeWrapper.find('p.empty-msg').length).toBe(0)
    expect(enzymeWrapper.find('div.repo-list').length).toBe(0)
  })

  it('should render repos list', () => {

    const { enzymeWrapper } = setup({loading: false, items: [1,2,3], error: ''})

    expect(enzymeWrapper.find('LinearProgress').length).toBe(0)
    expect(enzymeWrapper.find('p.error-msg').length).toBe(0)
    expect(enzymeWrapper.find('p.empty-msg').length).toBe(0)
    expect(enzymeWrapper.find('div').hasClass('repo-list')).toBe(true)
    expect(enzymeWrapper.find('Repo').length).toBe(3)
  })

})
