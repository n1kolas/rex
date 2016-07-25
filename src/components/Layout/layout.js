import React from 'react'
import Navigation from './Navigation/navigation'
import Footer from './Footer/footer'

export default React.createClass({
  render() {
    return (
      <div id="page-wrapper">
        <Navigation />
        <div id="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
})
