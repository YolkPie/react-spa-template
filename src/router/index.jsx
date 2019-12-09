import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom'

import IndexPage from '@pages/indexPage'

export default () => (
  <Router>
    <Route path="/" component={IndexPage} />
  </Router>
)
