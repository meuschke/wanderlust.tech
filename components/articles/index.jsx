import React from 'react'
import './style.scss'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import image from '../hero/images/banner.jpg'
import imageUrl from '../../utils/url.js'
import './style.scss'

console.log(imageUrl)

module.exports = React.createClass({
  getMonthName(date) {
    const locale = this.props.route.page.data.locale
    const articleDate = new Date(date)
    const month = articleDate.getMonth()
    const day = articleDate.getDate()
    const year = articleDate.getFullYear()
    const months = {
      "DE": ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
      "EN": ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
    return day + ' ' + months[locale][month] + ' ' + year
  },
  getArticles() {
    const today = new Date()
    const locale = this.props.route.page.data.locale
    const articles = this.props.route.pages.filter(
      page => page.data.layout === 'post' && today >= new Date(page.data.date)
    )
    .filter(
      page =>  page.data.locale === locale
    )
    .sort(
      (pageA, pageB) => new Date(pageB.data.date) - new Date(pageA.data.date)
    )
    return articles
  },
  render() {
    const pageLinks = []
    const style = {
      backgroundImage: ''
    }
    const req = require.context("./../../pages", true, /\.jpg$/)
    const articles = this.getArticles()
    var image
    articles.forEach((page, id) => {
      if(page.data.image){
         image = imageUrl.absolutePath(req('./'+ page.file.dirname + '/' + page.data.image))
      }

      pageLinks.push(
        <div key={id} className='col-xs-12
                        col-sm-6'>
          <Link to={prefixLink(page.path)}>
          <span className='vignette'>
          <img src={image} alt={page.data.title} />
          </span>
          <h4>{page.data.title}</h4>
          </Link>
          <p>
            {page.data.description}
          </p>
          <small>{this.getMonthName(page.data.date)}</small>
        </div>
      )
    })
    return (
    <div className='articles'>
      <h2>LATEST POSTS</h2>
      <div className="row center-lg">
        {pageLinks.length ? pageLinks : "Sorry there are no articles right now."}
      </div>
    </div>
    )
  },
})
