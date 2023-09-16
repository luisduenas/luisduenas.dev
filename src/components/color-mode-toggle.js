import React from "react"
import { useColorMode, Switch } from "theme-ui"

const ColorModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Switch
      label={colorMode === "default" ? "dark" : "light"}
      onClick={() => {
        setColorMode(colorMode === "default" ? "dark" : "default")
      }}
      checked={colorMode === "default"}
      onChange={() => {}}
    />
  )
}

export default ColorModeToggle
