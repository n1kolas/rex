import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, IndexRoute, Route, Router } from 'react-router'

import Layout from './components/Layout/layout'
import Front from './components/Front/front'
import Example from './components/Example/example'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      // Index Route.
      <IndexRoute component={Front} />
      // Other Routes.
      <Route path="/example" component={Example} />
    </Route>
  </Router>
), document.getElementById('app'))
