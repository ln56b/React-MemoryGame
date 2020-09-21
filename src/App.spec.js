import { shallow } from 'enzyme'
import { expect } from 'chai'
import React from 'react'

import App from './App'
import GuessCount from './components/GuessCount'

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).to.contain(<GuessCount guesses={0} />)
  })

  it('has 36 cards', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('Card')).to.have.length(36)
  })
})