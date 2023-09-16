import React from "react"
import { useColorMode, Label } from "theme-ui"

const ColorModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Label
      onClick={() => {
        setColorMode(colorMode === "default" ? "dark" : "default")
      }}
      sx={{
        cursor: "pointer",
        border: "1px solid",
        borderColor: "primary",
        p: 1
      }}
    >
      {colorMode === "default" ? "dark mode" : "light mode"}
    </Label>
  )
}

export default ColorModeToggle
