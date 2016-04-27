import React from 'react'
import './style.css'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  getInitialState: function () {
    return {
      open: false
    }
  },
  onClick() {
    if (this.state.open) {
      this.setState({open: false})
    } else {
      this.setState({open: true})
    }
  },
  getLocal() {
    return (this.props.route && this.props.route.page.data.locale) || 'DE'
  },
  getLocalRoute() {
    return this.props.route && this.props.route.page.data.locale === 'DE' ? '/en/' : '/'
  },
  render() {
    const locale = this.getLocal()
    const localeRoute = this.getLocalRoute()
    var openClass = this.state.open ? 'open' : ''
    return (
    <div>
      <div className="topmenu">
        <div id="nav-icon1" onClick={this.onClick} className={openClass}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={'menu-overlay ' + openClass}>
        <Link to={prefixLink(localeRoute)} className='change-language icon fa-globe'> &nbsp;
        {locale === 'DE' ? 'EN' : 'DE'}
        </Link>
        <div className="menu">
          <ul>
            <li onClick={this.onClick}>
              <Link to={prefixLink(locale === 'EN' ? '/en/' : '/')}> Home
              </Link>
            </li>
            <li onClick={this.onClick}>
              <Link to={prefixLink((locale === 'EN' ? '/en/' : '/') + 'about/')}> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
  },
})
