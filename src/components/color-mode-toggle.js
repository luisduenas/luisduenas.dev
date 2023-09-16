import React from "react"
import { useColorMode, Switch } from "theme-ui"

export default props => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Switch
      label={colorMode === "default" ? "dark" : "light"}
      onClick={e => {
        setColorMode(colorMode === "default" ? "dark" : "default")
      }}
      checked={colorMode === "default"}
    />
  )
}
