import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const { previous, next } = data
  const post = data.datoCmsBlogpost
  const siteTitle = data.site.siteMetadata.title || `Title`

  return (
    <Layout
      location={location}
      title={siteTitle}
      desciption={post.contentNode.childMarkdownRemark.excerpt}
    >
      <Seo title={post.title} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.title}</h1>
          <p>{post.publishdate}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{
            __html: post.contentNode.childMarkdownRemark.html,
          }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={"/" + previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={"/" + next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    datoCmsBlogpost(id: { eq: $id }) {
      title
      slug
      publishdate(formatString:"MMMM DD, YYYY")
      contentNode {
        childMarkdownRemark {
          excerpt
          html
        }
      }
    }
    previous: datoCmsBlogpost(id: { eq: $previousPostId }) {
      slug
      title
    }
    next: datoCmsBlogpost(id: { eq: $nextPostId }) {
      slug
      title
    }
  }
`
