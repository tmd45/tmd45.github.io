import * as React from "react"
import { Avatar, Box, createTheme, ListItem, Typography } from "@mui/material"
import { Link } from "./Link"

export default function MenuTitle() {
  const theme = createTheme()

  return (
    <ListItem
      disablePadding
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box width={"100%"}>
        <Link
          href="/"
          underline="none"
          sx={{
            display: "block",
            paddingBottom: "1rem",
            fontSize: "2rem",
            textAlign: "center",
            width: "100%",
            height: "100%",
            color: theme.palette.common.white,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroudColor: theme.palette.primary.dark,
            },
          }}
        >
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "1.5rem 0",
            }}
          >
            <Avatar
              alt="tmd45.jp"
              src="/assets/tmd45_tw.jpg"
              sx={{
                width: 180,
                height: 180,
              }}
            />
          </Box>
          <Typography fontSize={"20px"} fontWeight={700}>
            tmd45.jp
          </Typography>
        </Link>
      </Box>
    </ListItem>
  )
}
