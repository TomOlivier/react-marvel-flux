import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from './App'

describe('<App/> component', () => {

  const wrapper = shallow(<App />)
  const inst = wrapper.instance()

  it('Should be mounted', () => {
    const h1 = wrapper.find('h1')

    expect(h1.length).to.equal(1)
    expect(h1.text()).to.equal("Marvel's Codex")
  })
})