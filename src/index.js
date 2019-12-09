import React from 'react'
import ReactDOM from 'react-dom'

// 引入rem
import '@utils/rem'

import './styles/base.scss'
import App from './App'


// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
