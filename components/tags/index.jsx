import React from 'react'
import './style.css'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  render() {
    if (this.props.post && this.props.post.tags) {
      const tags = this.props.post.tags.split(",")
      const tagsJSX = tags.map(
        (tag, id) => <Link to={prefixLink('/tags/' + tag)} key={id} className="tag">{tag}</Link>
      )
      return (
      <div>
        {tagsJSX}
      </div>
      )
    } else {
      return null
    }
  },
})
