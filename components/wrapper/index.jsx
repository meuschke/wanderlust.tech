import React from 'react'
import './style.scss'

module.exports = React.createClass({
  render() {
    return (
    <wrapper className='wrapper style5'>
      <section className='inner'>
        {this.props.children}
      </section>
    </wrapper>
    )
  },
})
