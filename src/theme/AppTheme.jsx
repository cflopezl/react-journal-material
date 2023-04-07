import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purpleTheme } from "."


// este sera un high order component que recibira el app al cual le va a proveer el thema
export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}
