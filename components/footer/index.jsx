import React from 'react'
import './style.css'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'




module.exports = React.createClass({
  render() {
    return (
    <section id="footer">
      <div className="inner icons">
          <div>
          <a href="https://www.instagram.com/tonimeu/" target="_blank" className="icon fa-instagram" title="tonimeu"></a>
          <a href="https://www.snapchat.com/add/tonitaxi" target="_blank" className="icon fa-snapchat" title="tonitaxi"></a>
          </div>
      </div>
    </section>
    )
  },
})
