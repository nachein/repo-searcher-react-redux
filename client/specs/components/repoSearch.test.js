import React from 'react'
import { shallow } from 'enzyme'
import RepoSearch from '../../components/RepoSearch'

import { browserHistory } from 'react-router';

function setup() {

  const enzymeWrapper = shallow(<RepoSearch />)

  return {
    enzymeWrapper
  }
}

describe('components: RepoSearch', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('div').hasClass('search')).toBe(true)
    expect(enzymeWrapper.find('TextField').hasClass('search-box')).toBe(true)
    expect(enzymeWrapper.find('RaisedButton').hasClass('search-submit')).toBe(true)
  })

  it('should update state searchParam on input change', () => {
    const { enzymeWrapper } = setup()
    const input = enzymeWrapper.find('TextField')
    input.props().onChange({ target: { value: 'abc' }})
    expect(enzymeWrapper.state().searchTerm).toEqual('abc');
  })
})
