import * as React from "react"
import { Container, Stack, Box, useTheme } from "@mui/material"
import SideMenu from "../components/SideMenu"
import Head from "next/head"

interface Props {
  readonly children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const theme = useTheme()

  return (
    <>
      <Head>
        <title>tmd45.jp</title>
        <meta property="og:title" content="tmd45.jp" key="title" />
      </Head>
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
            <Container maxWidth="md" disableGutters>
              {children}
            </Container>
          </Box>
        </Stack>
      </Container>
    </>
  )
}
