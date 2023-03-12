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
} from "@mui/material"

import { Link } from "../components/Link"
import MenuSocialLink from "../components/MenuSocialLink"

const WIDTH = 256 // px

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
  const selectedItemName =
    [...MENU_ITEMS].find((item) => {
      return item.url
    })?.name ?? "Profile"

  const theme = useTheme()

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: `${WIDTH}px`,
        "& .MuiDrawer-paper": {
          width: `${WIDTH}px`,
          background: theme.palette.background.default,
          borderRight: `1px solid ${alpha(theme.palette.divider, 0.12)}`,
          padding: "8px 0",
        },
      }}
      open
    >
      <>
        <List>
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
    </Drawer>
  )
}
