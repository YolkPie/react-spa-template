import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
const IndexPage = lazy(() => import('@pages/indexPage'))
const renderLoading = ()=>{
  return (<div className={'page-loading'}><i></i>Loading...</div>)
}
export default () => (
  <Router>

    <Suspense fallback={renderLoading()}>
      <Route path="/" component={IndexPage} name={'indexPage'} />
    </Suspense>
  </Router>
)
