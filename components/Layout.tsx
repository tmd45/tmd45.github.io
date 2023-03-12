import * as React from "react"
import { Container, Grid, Stack, Box, Typography } from "@mui/material"
import { MuiNextLink } from "../components/MuiNextLink"
import ProTip from "../components/ProTip"
import Copyright from "../components/Copyright"
import SideMenu from "../components/SideMenu"

export default function Layout() {
  return (
    <Container maxWidth="lg">
      <Stack direction="row">
        <SideMenu />
      </Stack>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example in TypeScript
        </Typography>
        <MuiNextLink href="/about" color="secondary">
          Go to the about page
        </MuiNextLink>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
