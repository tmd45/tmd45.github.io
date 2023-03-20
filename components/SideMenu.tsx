import * as React from "react"
import { UrlObject } from "url"
import { useRouter } from "next/router"
import {
  Drawer,
  useTheme,
  List,
  ListItem,
  ListItemBaseProps,
  ListItemButton,
  ListItemText,
  Fab,
} from "@mui/material"

import { Link } from "../components/Link"
import MenuTitle from "./SideMenuTitle"

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
    name: "Activity",
    url: "/activity",
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
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const selectedItemName =
    [...MENU_ITEMS].find((item) => {
      return router.pathname.startsWith(item.url)
    })?.name ?? "Profile"

  const drawer = (
    <>
      <List disablePadding>
        <MenuTitle />
        {MENU_ITEMS.map((item) => (
          <MenuListItem
            key={item.name}
            item={item}
            selected={item.url === selectedItemName}
          />
        ))}
      </List>
    </>
  )

  const theme = useTheme()

  return (
    <>
      {/* Fab: Floating Action Button */}
      <Fab
        color="primary"
        aria-label="open drawer"
        // edge="start"
        onClick={handleDrawerToggle}
        sx={{
          mr: 2,
          display: { sm: "none" },
          position: "fixed",
          bottom: 32,
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
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset",
          },
        }}
      >
        {/* View in desktop */}
        {drawer}
      </Drawer>
    </>
  )
}
