import React from 'react'
import DocumentMeta from 'react-document-meta'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  propTypes() {
    return {
      title: React.PropTypes.string,
    }
  },
  render() {
    const meta = DocumentMeta.rewind() || {
      title: "Wanderlust - A blog about digital nomad lifestyle",
      description: "Digitaler Nomade sind Menschen die ortsunabhängig arbeiten und dabei die Welt bereisen.",
      canonical: 'https://wanderlust.tech/'
    }


    let cssLink
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={prefixLink('/styles.css')} />
    }
    return (

    <html lang="de">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0" />
      <title>
        {meta.title}
      </title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:image" content={meta.image}  />
      <link rel="canonical" href={meta.canonical} />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      {cssLink}
    </head>
    <body>
      <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
      <script src={prefixLink('/bundle.js')} />
    </body>
    </html>
    )
  },
})
