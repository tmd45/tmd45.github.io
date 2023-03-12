import * as React from "react"
import {
  ListItem,
  Box,
  ButtonGroup,
  IconButton,
  SvgIcon,
  Tooltip,
} from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import HomeWorkIcon from "@mui/icons-material/HomeWork"
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"

interface MenuSocialItem {
  readonly name: string
  readonly icon: typeof SvgIcon
  readonly url: string
}

const SOCIAL_ITEMS: readonly MenuSocialItem[] = [
  {
    name: "Misskey: Betaful.life",
    icon: HomeWorkIcon,
    url: "https://misskey.betaful.life",
  },
  {
    name: "Misskey: げむすき",
    icon: SportsEsportsIcon,
    url: "https://misskey.gamelore.fun",
  },
  {
    name: "GitHub",
    icon: GitHubIcon,
    url: "https://github.com/tmd45",
  },
]

const SocialItem: React.FC<{
  readonly item: MenuSocialItem
}> = ({ item }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <Tooltip title={item.name} placement="bottom-start">
      <IconButton
        color="primary"
        size="large"
        aria-label={item.name}
        href={item.url}
        aria-owns={open ? "popover-{item.name}" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          padding: "1rem",
        }}
      >
        <item.icon fontSize="inherit" />
      </IconButton>
    </Tooltip>
  )
}

export default function MenuSocialLink() {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
      }}
    >
      <Box>
        <ButtonGroup fullWidth>
          {SOCIAL_ITEMS.map((item) => (
            <SocialItem key={item.name} item={item} />
          ))}
        </ButtonGroup>
      </Box>
    </ListItem>
  )
}
