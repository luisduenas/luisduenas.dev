/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allDatoCmsBlogpost.nodes
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <ol
        sx={{
          p: 0,
          listStyle: "none",
        }}
      >
        {posts.map(post => {
          const title = post.title || post.slug
          const image = getImage(post.hero)
          return (
            <li
              key={post.slug}
              sx={{
                mb: "2rem",
              }}
            >
              <article itemScope itemType="http://schema.org/Article">
                <div>
                  <header>
                    <h2 sx={{ my: 0 }}>
                      <Link to={post.slug} itemProp="url">
                        {title}
                      </Link>
                    </h2>
                  </header>
                  <section
                    sx={{
                      display: "flex",
                      py: "1rem",
                    }}
                  >
                    <GatsbyImage
                      image={image}
                      width="25%"
                      alt="test"
                      sx={{
                        display: ["none", "block"],
                      }}
                    />
                    <div
                      sx={{
                        ml: ["0", "1rem"],
                        width: ["100%", "75%"],
                      }}
                    >
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.contentNode.childMarkdownRemark.excerpt,
                        }}
                        itemProp="description"
                      />
                      <small>{post.publishdate}</small>
                    </div>
                  </section>
                </div>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const Head = () => (
  <Seo />
)

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allDatoCmsBlogpost(sort: { fields: [publishdate], order: DESC }) {
      nodes {
        slug
        title
        publishdate(formatString: "MMMM DD, YYYY")
        hero {
          gatsbyImageData(width: 250, placeholder: BLURRED)
        }
        contentNode {
          childMarkdownRemark {
            excerpt
            html
          }
        }
      }
    }
  }
`
