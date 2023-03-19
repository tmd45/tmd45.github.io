import * as React from "react"
import { Fab } from "@mui/material"
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded"

export default function ReturnTopFab() {
  const [isButtonActive, setIsButtonActive] = React.useState(false)

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollWindow = () => {
    const top = 100 // ボタンを表示させたい位置
    let scroll = 0
    scroll = window.scrollY
    if (top <= scroll) {
      setIsButtonActive(true)
    } else {
      setIsButtonActive(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", scrollWindow)
    return () => {
      window.removeEventListener("scroll", scrollWindow)
    }
  }, [])

  const normalStyle = {
    opacity: 0,
    transition: "0.5s",
    pointerEvents: "none",
  }
  const activeStyle = {
    opacity: 1,
    transition: "0.5s",
  }
  const style = isButtonActive ? activeStyle : normalStyle

  return (
    <Fab
      color="primary"
      aria-label="return top"
      onClick={returnTop}
      style={style}
      sx={{
        mr: 2,
        position: "fixed",
        bottom: 32,
        right: 32,
      }}
    >
      <KeyboardDoubleArrowUpRoundedIcon />
    </Fab>
  )
}
