import * as React from "react"
import { Avatar, Box, Typography, AvatarGroup, useTheme } from "@mui/material"
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded"
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded"
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded"
import Copyright from "../components/Copyright"

export default function IndexPage() {
  const theme = useTheme()

  return (
    <>
      <Typography
        variant="h3"
        pb="1rem"
        gutterBottom
        sx={{
          "&.MuiTypography-h3": { color: `${theme.palette.primary.main}` },
        }}
      >
        Profile
      </Typography>
      <Typography variant="h4" gutterBottom>
        Yoko TAMADA, @tmd45
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        I&apos;m a web application developer in Tokyo, Japan.
      </Typography>
      <Typography variant="body1" pb="1rem" gutterBottom>
        Interested in web application development, user experience, and UI
        design. I{" "}
        <FavoriteBorderRoundedIcon
          fontSize="inherit"
          sx={{
            verticalAlign: "-3px",
          }}
        />{" "}
        so many more interesting things.
      </Typography>

      <Box
        pb="1.5rem"
        sx={{
          display: "flex",
          justifyContent: "left",
        }}
      >
        <AvatarGroup max={5}>
          <Avatar
            alt="Icon tmd45 2015"
            src="/assets/tmd45_logo_2015.png"
            sx={{ width: 64, height: 64 }}
          />
          <Avatar
            alt="Icon tmd45 tw2"
            src="/assets/tmd45_logo_tw2.png"
            sx={{ width: 64, height: 64 }}
          />
          <Avatar
            alt="Icon tmd45 fb"
            src="/assets/tmd45_logo_fb.png"
            sx={{ width: 64, height: 64 }}
          />
          <Avatar
            alt="Icon tmd45 fb2"
            src="/assets/tmd45_logo_fb2.jpg"
            sx={{ width: 64, height: 64 }}
          />
          <Avatar
            alt="Icon tania ffxiv 7thaniv"
            src="/assets/tania_ffxiv_7thanv.png"
            sx={{ width: 64, height: 64 }}
          />
        </AvatarGroup>
      </Box>

      <Typography variant="h5" pb="0.5rem" gutterBottom>
        Experience
      </Typography>

      <Typography variant="h6" pl="0.5rem" gutterBottom>
        Programming
      </Typography>
      <Typography variant="body2" pb="1rem" pl="1rem" gutterBottom>
        Ruby <small>(Job and Hobby use)</small> / JavaScript and TypeScript{" "}
        <small>(a little)</small> / Java <small>(long ago)</small> / PHP{" "}
        <small>(long ago and a little)</small> / HTML + CSS / Sass / Markdown
      </Typography>

      <Typography variant="h6" pl="0.5rem" gutterBottom>
        Frameworks
      </Typography>
      <Typography variant="body2" pb="1rem" pl="1rem" gutterBottom>
        Ruby on Rails <small>(Job and Hobby use)</small> / React{" "}
        <small>(a little)</small> / Next.js <small>(a little)</small> /
        Docusaurus / Padrino <small>(a little)</small> / Struts{" "}
        <small>(Java, long ago)</small> / Hibernate <small>(long ago)</small>
      </Typography>

      <Typography variant="h6" pl="0.5rem" gutterBottom>
        Systems
      </Typography>
      <Typography variant="body2" pb="1rem" pl="1rem" gutterBottom>
        OS X / Cent OS / Solaris <small>(long ago)</small> / nginx{" "}
        <small>(a little)</small>
      </Typography>

      <Typography variant="h6" pl="0.5rem" gutterBottom>
        Tools
      </Typography>
      <Typography variant="body2" pb="1rem" pl="1rem" gutterBottom>
        VS Code / Vim / Eclipse <small>(long ago)</small> / Git / GitHub / Slack
        / Eclipse<small>(long ago)</small>
      </Typography>

      <Typography variant="h6" pl="0.5rem" gutterBottom>
        Others
      </Typography>
      <Typography variant="body2" pb="1rem" pl="1rem" gutterBottom>
        OAuth and OpenID Connect <small>(acquiring now)</small>
      </Typography>

      <Typography variant="h5" pb="0.5rem" gutterBottom>
        Hobby
      </Typography>
      <Typography variant="body1" pb="1rem" pl="0.5rem" gutterBottom>
        Most favorite is Final Fantasy XIV (MMORPG).
        <br />
        I&apos;m playing WhiteMage since 2013. And I like to play various games.
      </Typography>

      <Typography variant="h5" pb="0.5rem" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" pb="1rem" pl="0.5rem" gutterBottom>
        <AlternateEmailRoundedIcon
          fontSize="small"
          sx={{
            verticalAlign: "-4px",
          }}
        />{" "}
        tmd45
        <br />
        <MailOutlineRoundedIcon
          fontSize="small"
          sx={{
            verticalAlign: "-5px",
          }}
        />{" "}
        tmd45[at]betaful.life
      </Typography>

      <Copyright />
    </>
  )
}
