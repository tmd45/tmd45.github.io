import * as React from "react"
import { Container, Stack, Box } from "@mui/material"
import SideMenu from "../components/SideMenu"

interface Props {
  readonly children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxWidth="lg">
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
