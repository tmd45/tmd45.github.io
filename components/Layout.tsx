import * as React from "react"
import { Container, Stack, Box, useTheme } from "@mui/material"
import SideMenu from "../components/SideMenu"

interface Props {
  readonly children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const theme = useTheme()

  return (
    <Container
      maxWidth="xl"
      sx={{
        borderTop: `5px solid ${theme.palette.primary.dark}`,
      }}
    >
      <Stack direction="row">
        <SideMenu />
        <Box
          sx={{
            width: "100%",
            padding: "32px",
          }}
        >
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              maxWidth: "1080px",
            }}
          >
            {children}
          </Container>
        </Box>
      </Stack>
    </Container>
  )
}
