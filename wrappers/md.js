import React from 'react'
import { config } from 'config'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Wrapper from '../components/wrapper'
import Tags from '../components/tags'
import DocumentMeta from 'react-document-meta'

export default class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props
    const post = route.page.data
    const meta = {
      title: post.title,
      description: post.description,
      canonical: post.canonical || ('https://wanderlust.tech' + post.path),
      image: post.image,
      type: post.layout,
      locale: typeof post.locale === 'string' ? post.locale.toLowerCase() : 'DE'
    }

    return (
      <div>
        <DocumentMeta {...meta} />
        <Nav route={this.props.route} />
        <Hero post={post} route={this.props.route} />
        <Wrapper>
          <div className="markdown">
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </div>
          <Tags post={post} />
        </Wrapper>
        <Footer />
      </div>

    )
  }
}
