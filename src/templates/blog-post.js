/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const { previous, next } = data
  const post = data.datoCmsBlogpost
  const siteTitle = data.site.siteMetadata.title || `Title`
  const image = getImage(post.hero)

  const meta = post.seoMetaTags?.tags.map(tags => {
    return {
      ...tags.attributes,
    }
  })

  return (
    <Layout
      location={location}
      title={siteTitle}
      desciption={post.contentNode.childMarkdownRemark.excerpt}
    >
      <Seo title={post.title} meta={meta} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.title}</h1>
          <p>{post.publishdate}</p>
        </header>
        <GatsbyImage image={image} alt="test" />
        <hr
          sx={{
            my: "2rem",
          }}
        />

        <section
          dangerouslySetInnerHTML={{
            __html: post.contentNode.childMarkdownRemark.html,
          }}
          itemProp="articleBody"
          sx={{
            fontSize: 3,
          }}
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          sx={{
            listStyle: "none",
            p: 0,
            display: ["block", "flex"],
            justifyContent: "space-between",
          }}
        >
          {previous && (
            <li>
              <Link to={"/" + previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            </li>
          )}
          {next && (
            <li>
              <Link to={"/" + next.slug} rel="next">
                {next.title} →
              </Link>
            </li>
          )}
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
      seoMetaTags {
        tags
      }
      title
      slug
      publishdate(formatString: "MMMM DD, YYYY")
      hero {
        gatsbyImageData(placeholder: BLURRED)
      }
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
