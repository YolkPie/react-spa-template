import React from 'react'
import renderer from 'react-test-renderer'
import CommsA from '../components/CommsA'

describe('测试 组件', () => {
  it('正确渲染 CommsA 组件', () => {
    const button = renderer.create(<CommsA></CommsA>).toJSON()
    expect(button).toMatchSnapshot()
  })
})

