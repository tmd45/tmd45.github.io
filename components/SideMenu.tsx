import * as React from "react"
import {
  Drawer,
  alpha,
  useTheme,
  List,
  ListItem,
  ListItemBaseProps,
  ListItemButton,
  ListItemText,
  IconButton,
  Fab,
} from "@mui/material"

import { Link } from "../components/Link"
import MenuTitle from "./SideMenuTitle"
import MenuSocialLink from "../components/MenuSocialLink"

import MenuRoundedIcon from "@mui/icons-material/Menu"

const drawerWidth = 256 // px

interface SideMenuItem {
  readonly name: string
  readonly url: string
}

const MENU_ITEMS: readonly SideMenuItem[] = [
  {
    name: "Profile",
    url: "/",
  },
  {
    name: "Blog",
    url: "https://blog.betaful.life",
  },
  {
    name: "Activity",
    url: "/activity",
  },
  {
    name: "Identification",
    url: "/identification",
  },
]

const MenuListItem: React.FC<{
  readonly item: SideMenuItem
  readonly selected?: boolean
  readonly dense?: ListItemBaseProps["dense"]
}> = ({ item, selected, dense }) => {
  const theme = useTheme()

  return (
    <ListItem disablePadding dense={dense}>
      <ListItemButton
        component={Link}
        href={item.url}
        selected={selected}
        noExternalIcon={false}
        sx={{
          paddingLeft: "32px",
          paddingRight: "32px",
          "&.Mui-selected": {
            paddingLeft: "34px",
            paddingRight: "34px",
            borderLeft: `solid 2px ${theme.palette.primary.main}`,
            color: theme.palette.primary.main,
            "& svg": {
              color: theme.palette.primary.main,
            },
          },
        }}
      >
        <ListItemText primary={item.name} />
      </ListItemButton>
    </ListItem>
  )
}

export default function SideMenu() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const selectedItemName =
    [...MENU_ITEMS].find((item) => {
      return item.url
    })?.name ?? "Profile"

  const drawer = (
    <>
      <List disablePadding>
        <MenuTitle />
        <MenuSocialLink />
        {MENU_ITEMS.map((item) => (
          <MenuListItem
            key={item.name}
            item={item}
            selected={selectedItemName === "Activity"}
          />
        ))}
      </List>
    </>
  )

  const theme = useTheme()

  return (
    <>
      <Fab
        color="primary"
        aria-label="open drawer"
        // edge="start"
        onClick={handleDrawerToggle}
        sx={{
          mr: 2,
          display: { sm: "none" },
          position: "absolute",
          bottom: 16,
          left: 16,
        }}
      >
        <MenuRoundedIcon />
      </Fab>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          width: drawerWidth,
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: theme.palette.background.default,
            borderRight: "none",
          },
        }}
      >
        {/* View in mobile */}
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{
          width: drawerWidth,
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: theme.palette.background.default,
            borderRight: "none",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          },
        }}
      >
        {/* View in desktop */}
        {drawer}
      </Drawer>
    </>
  )
}
