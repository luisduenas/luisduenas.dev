/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import ColorModeToggle from "../components/color-mode-toggle"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div
      sx={{
        mx: ["1rem", null, "auto"],
        maxWidth: "720px",
        mb: "2rem"
      }}
      data-is-root-path={isRootPath}
    >
      <header
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          label:{
            width: "auto"
          }
        }}
      >
        <h1>
          <Link to="/">{title}</Link>
        </h1>
        <ColorModeToggle />
      </header>
      <main>{children}</main>
      <footer sx={{
        mt: "4rem"
      }}>
        <a href="https://github.com/luisduenas">github</a>
        {` - `}
        <a href="https://twitter.com/_lduenas">twitter</a>
      </footer>
    </div>
  )
}

export default Layout
