import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CommsA from '@components/CommsA'

import { getApi1 } from './api'

import './index.scss'

const IndexPage = () => (
  <div>
    Hello React! This is indexPage
    <CommsA />
  </div>
)

export default IndexPage
