import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './styles/base.scss'
import App from './App'

declare module 'react' {
  interface HTMLAttributes<T> {
    clstag?: string;
  }
}

ReactDOM.render(
  <div className="App">
    <App />
  </div>,
  document.getElementById('app') as HTMLElement
)

if (module.hot) {
  module.hot.accept()
}

