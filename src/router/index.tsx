import React, { Suspense, lazy, ReactElement } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const IndexPage = lazy(() => import('@pages/indexPage'))
const renderLoading: () => ReactElement<any, any> = () => (
  <div className="page-loading">
    <i />
    Loading...
  </div>
)
const router: () => ReactElement<any, any> = () => (
  <Router>
    <Suspense fallback={renderLoading()}>
      <Route path="/" component={IndexPage} name="indexPage" />
    </Suspense>
  </Router>
)
export default router
