import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'



import '../assets/css/grid.css'
import '../assets/scss/main.scss'


module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>

          {this.props.children}

      </div>
    )
  },
})
