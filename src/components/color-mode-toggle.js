import React, { useEffect } from "react"
import { useColorMode, Box } from "theme-ui"

const ColorModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()
  useEffect(() => {}, [colorMode])
  const handleClick = () => {
    const currentMode = colorMode === "default" ? "dark" : "default"
    setColorMode(currentMode)
  }
  return (
    <Box
      as="p"
      onClick={handleClick}
      sx={{
        cursor: "pointer",
        border: "1px solid",
        borderColor: "primary",
        p: 1,
      }}
    >
      {colorMode === "default" ? "dark mode" : "light mode"}
    </Box>
  )
}

export default ColorModeToggle
