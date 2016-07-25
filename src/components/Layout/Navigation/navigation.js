import React from 'react'
import { IndexLink, Link } from 'react-router'
import './navigation.css'

export default React.createClass({
  render() {
    return (
      <header>
        <ul role="navigation" className="nav">
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          <Link to="/example" activeClassName="active">Example</Link>
        </ul>
      </header>
    )
  }
})
