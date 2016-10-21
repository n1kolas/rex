import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, IndexRoute, Route, Router } from 'react-router'

import Layout from '../components/Layout/layout'
import Front from '../components/Front/front'
import Counter from '../components/Example/Counter/counter'

var getRoutes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        // Index Route.
        <IndexRoute component={Front} />
        // Other Routes.
        <Route path="/counter" component={Counter} />
      </Route>
    </Router>
  )
}

if (typeof window !== 'undefined') {
  ReactDOM.render(getRoutes(), document.getElementById('app'))
}

export default getRoutes;
