import React from 'react'
import Header from './Header/header'
import Footer from './Footer/footer'

import "./layout.scss"

export default React.createClass({
  render() {
    return (
      <div id="page-layout">
        <Header />
        <div id="page-content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
})
