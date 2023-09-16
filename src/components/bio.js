/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div
      sx={{
        mb: "4rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile.jpeg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
        sx={{
          mr: "1rem",
          borderRadius: "50%"
        }}
      />
      {author?.name && (
        <p>
          <strong>{author.name}</strong> / web developer
          <br /> {author?.summary || null}
          {` `}
        </p>
      )}
    </div>
  )
}

export default Bio
