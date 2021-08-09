import React, { ReactElement } from 'react'
import CommsA from '@components/CommsA'
import './index.scss'

const IndexPage: () => ReactElement<any, any> = () => (
  <div>
    Hello React! This is indexPage
    <CommsA />
  </div>
)

export default IndexPage
