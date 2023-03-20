import * as React from "react"
import { Link, Typography, useTheme } from "@mui/material"
import ReturnTopFab from "../components/ReturnTopFab"
import Copyright from "../components/Copyright"

export default function SkillsPage() {
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
        Skills
      </Typography>

      <Typography variant="h5" pb="0.5rem" gutterBottom>
        Portfolio
      </Typography>
      <Typography variant="body1" pb="1rem" pl="0.5rem" gutterBottom>
        <Link href="https://lapras.com/public/tmd45">LAPRAS</Link>
        <br />
        <Link href="https://www.wantedly.com/id/tmd45">Wantedly</Link>
        <br />
        <Link href="https://portfolio.forkwell.com/@tmd45">
          Forkwell Portfolio
        </Link>
      </Typography>

      <Typography variant="h5" pb="0.5rem" gutterBottom>
        Skills
      </Typography>

      <Typography variant="h6" pb="0.5rem" pl="0.5rem" gutterBottom>
        経験言語
      </Typography>
      <Typography variant="body2" pb="1rem" pl="1rem" gutterBottom>
        Ruby（on Rails）, JavaScript/TypeScript（少し）, Markdown, HTML,（大昔
        Java, C）
      </Typography>

      <Typography variant="h6" pb="0.5rem" pl="0.5rem" gutterBottom>
        利用環境
      </Typography>
      <Typography variant="body2" pb="1rem" pl="1rem" gutterBottom>
        macOS, CentOS, AWS, GCP, Vercel, Heroku
      </Typography>

      <Typography variant="h6" pb="0.5rem" pl="0.5rem" gutterBottom>
        エディタ
      </Typography>
      <Typography variant="body2" pb="1rem" pl="1rem" gutterBottom>
        VScode, Vim, TextMate,（昔 Eclipse）
      </Typography>

      <Typography variant="h6" pb="0.5rem" pl="0.5rem" gutterBottom>
        その他
      </Typography>
      <Typography variant="body2" pb="1rem" pl="1rem" gutterBottom>
        OAuth, OpenID Connect, Shopify, Docusaurus, スクラム, アジャイル,
        チームビルディング, メンタリング, 心理的安全性
      </Typography>

      <ReturnTopFab />
      <Copyright />
    </>
  )
}
