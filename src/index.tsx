import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import { rem } from '@yolkpie/utils'
import './styles/base.scss'
import App from './App'

// rem() // 不建议rem
ReactDOM.render(
  <div className="App">
    <App />
  </div>,
  document.getElementById('app') as HTMLElement
)

if (module.hot) {
  module.hot.accept()
}

