import React from 'react'
import './style.css'
import imageUrl from '../../utils/url.js'


module.exports = React.createClass({
  render() {
    const page = this.props.route.page
    const req = require.context("./../../pages", true, /\.jpg$/)
    const title = (this.props.post && this.props.post.title) || 'Wanderlust'
    const subheadline = (this.props.post && this.props.post.subheadline) || 'digital nomad lifestyle'
    var style = {}
    if(this.props.post && this.props.post.image){
      const image = imageUrl.absolutePath(req('./' + page.file.dirname + "/" + this.props.post.image))
      style.backgroundImage = 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + image + ')'
    }

    return (

    <section id="banner" style={style}>
      <div className="inner">
        <h1>{title}</h1>
        <p>
          {subheadline}
        </p>
      </div>
    </section>
    )
  },
})
