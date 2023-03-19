import * as React from "react"
import Typography from "@mui/material/Typography"
import MuiLink from "@mui/material/Link"

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" pt="3rem">
      {"Copyright © "}
      2009-{new Date().getFullYear()}{" "}
      <MuiLink color="inherit" href="https://tmd45.jp">
        tmd45.jp
      </MuiLink>
      .
    </Typography>
  )
}
