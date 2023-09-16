const theme = {
  config: {
    initialColorModeName: "dark",
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#3366ff",
    secondary: "#b31b1b",
    muted: "#d1d1d1",
    highlight: "#29112c",
    gray: "#999",
    purple: "#c0f",
    modes: {
      dark: {
        text: "#fff",
        background: "#060606",
        primary: "#3cf",
        muted: "#191919",

      },
    },
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    display: {
      variant: "text.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      mt: 3,
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      a: {
        color: "primary",
        "&:hover": {
          color: "secondary",
        },
      },
      h1: {
        variant: "text.display",
      },
      h2: {
        variant: "text.heading",
        fontSize: 5,
      },
      h3: {
        variant: "text.heading",
        fontSize: 4,
      },
      h4: {
        variant: "text.heading",
        fontSize: 3,
      },
      h5: {
        variant: "text.heading",
        fontSize: 2,
      },
      h6: {
        variant: "text.heading",
        fontSize: 1,
      },
      a: {
        color: "primary",
        "&:hover": {
          color: "secondary",
        },
      },
      pre: {
        variant: "prism",
        fontFamily: "monospace",
        p: 3,
        color: "text",
        bg: "muted",
        overflow: "auto",
        code: {
          color: "inherit",
        },
      },
      code: {
        fontFamily: "monospace",
        color: "secondary",
      },
      inlineCode: {
        fontFamily: "monospace",
        color: "secondary",
        bg: "muted",
      },
      table: {
        width: "100%",
        my: 4,
        borderCollapse: "separate",
        borderSpacing: 0,
        "th, td": {
          textAlign: "left",
          py: "4px",
          pr: "4px",
          pl: 0,
          borderColor: "muted",
          borderBottomStyle: "solid",
        },
      },
      th: {
        verticalAlign: "bottom",
        borderBottomWidth: "2px",
      },
      td: {
        verticalAlign: "top",
        borderBottomWidth: "1px",
      },
      hr: {
        border: 0,
        borderBottom: "1px solid",
        borderColor: "muted",
      },
      img: {
        maxWidth: "100%",
        borderRadius: "1rem",
      },
    },
  },
  prism: {
    ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
      color: "gray",
    },
    ".comment": {
      fontStyle: "italic",
    },
    ".property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable":
      {
        color: "purple",
      },
    ".atrule,.attr-value,.keyword": {
      color: "primary",
    },
    ".selector,.attr-name,.string,.char,.builtin,.inserted": {
      color: "secondary",
    },
  },
}

export default theme
