import React from 'react'

import { IndexLink, Link } from 'react-router'
import "./navigation.scss"

export default React.createClass({
  render() {
    return (
      <div className="header-navigation">
        <ul>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/example" activeClassName="active">Example</Link></li>
        </ul>
      </div>
    )
  }
})