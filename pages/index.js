import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Wrapper from '../components/wrapper'
import Articles from '../components/articles'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Footer from '../components/footer'
import DocumentMeta from 'react-document-meta'

export default class BlogIndex extends React.Component {
  render() {
    const meta = {
      title: "Wanderlust - A blog about digital nomad lifestyle",
      description: "Digitale Nomade sind Menschen die ortsunabhängig arbeiten und dabei die Welt bereisen.",
      canonical: 'https://wanderlust.tech/'
    }
    this.props.route.page.data = {
      locale: "DE"
    }
    return (
    <div>
      <DocumentMeta {...meta} />
      <Nav route={this.props.route} />
      <Hero route={this.props.route}/>
      <Wrapper>
        <Articles route={this.props.route} />
      </Wrapper>
      <Footer />
    </div>

    )
  }
}
