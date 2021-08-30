import { ReactNode } from "react"
import { ColorScheme } from "@waweb/dato"
import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { createTheme } from "./theme"

export type ThemeProps = {
  colorScheme?: ColorScheme
  children: ReactNode | ReactNode[]
}

export function Theme({ children, colorScheme = "light" }: ThemeProps) {
  return (
    <ThemeProvider theme={createTheme(colorScheme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default Theme
