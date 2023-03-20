import * as React from "react"
import {
  Avatar,
  Box,
  Link,
  Typography,
  AvatarGroup,
  useTheme,
} from "@mui/material"
import Copyright from "../components/Copyright"
import ReturnTopFab from "../components/ReturnTopFab"

import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded"
import HomeWorkRoundedIcon from "@mui/icons-material/HomeWorkRounded"

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
        TAMADA Yoko, @tmd45
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        散財部風紀取り乱し委員わいわい係
      </Typography>
      <Typography variant="body1" pb="0.5rem" gutterBottom>
        一応 Web
        アプリケーション開発者ですが最近はメールとドキュメントばっかり書いてます。
        <br />
        職業エンジニア歴{new Date().getFullYear() - 2007}年、
        <HomeWorkRoundedIcon
          fontSize="inherit"
          color="primary"
          sx={{
            verticalAlign: "-3px",
          }}
        />{" "}
        WFH、えいえんの消費者、愛猫、パニック/広場恐怖症、本業は
        <Link href="https://jp.finalfantasyxiv.com/">光の戦士</Link>
      </Typography>

      <Box
        pb="1.5rem"
        sx={{
          display: "flex",
          justifyContent: "left",
        }}
      >
        <AvatarGroup max={6}>
          <Avatar
            alt="Icon tmd45 2015"
            src="/assets/tmd45_2015.png"
            sx={{ width: 64, height: 64 }}
          />
          <Avatar
            alt="Icon tmd45 tw2"
            src="/assets/tmd45_tw2.png"
            sx={{ width: 64, height: 64 }}
          />
          <Avatar
            alt="Icon tmd45 fb"
            src="/assets/tmd45_fb.png"
            sx={{ width: 64, height: 64, display: { xs: "none", sm: "block" } }}
          />
          {/* <Avatar
            alt="Icon tmd45 fb2"
            src="/assets/tmd45_fb2.jpg"
            sx={{ width: 64, height: 64, display: { xs: "none", sm: "block" } }}
          /> */}
          <Avatar
            alt="Icon tania ffxiv 7thanv"
            src="/assets/tania45_ffxiv_7thanv.png"
            sx={{ width: 64, height: 64 }}
          />
          <Avatar
            alt="Icon tania ffxiv 7thanv"
            src="/assets/tania45_youtube.png"
            sx={{ width: 64, height: 64 }}
          />
        </AvatarGroup>
      </Box>

      <Typography variant="h5" pb="0.5rem" gutterBottom>
        Hobby
      </Typography>
      <Typography variant="body1" pb="0.5rem" pl="0.5rem" gutterBottom>
        ゲーム・サブカル活動時の名前は @tania45、たーにゃ45
      </Typography>
      <Typography variant="body1" pb="1rem" pl="0.5rem" gutterBottom>
        ゲーム（FFXIV, Steam, Nintendo Switch）
        <small style={{ color: theme.palette.text.disabled }}>
          FFXIV は 2013 年 新生β からプレイ中のエンジョイヒーラー
        </small>
        <br />
        漫画読書、文房具（万年筆インク, はんこ）
        <br />
        ガジェット（Oura Ring, Steam Deck, オタマトーン, 電子リコーダー）
      </Typography>

      <Typography variant="h5" pb="0.5rem" gutterBottom>
        Links
      </Typography>
      <Typography variant="body1" pb="1rem" pl="0.5rem" gutterBottom>
        <Link href="https://blog.betaful.life">Blog</Link>
        <br />
        <Link href="https://github.com/tmd45">GitHub</Link>
        <br />
        <Link href="https://zenn.dev/tmd45">Zenn</Link>
        <br />
        <Link href="https://speakerdeck.com/tmd45">Speaker Deck</Link>
      </Typography>

      <Typography variant="h5" pb="0.5rem" gutterBottom>
        Social
      </Typography>
      <Typography variant="body1" pb="0.5rem" pl="0.5rem" gutterBottom>
        <Link href="https://misskey.betaful.life/@tmd45">
          @tmd45@misskey.betaful.life
        </Link>{" "}
        <small style={{ color: theme.palette.text.disabled }}>
          お一人鯖, メイン
        </small>
        <br />
        <Link href="https://misskey.systems/@tmd45">
          @tmd45@misskey.systems
        </Link>{" "}
        <small style={{ color: theme.palette.text.disabled }}>
          ITコミュニティ
        </small>
        <br />
        <Link href="https://misskey.gamelore.fun/@tania45">
          @tania45@misskey.gamelore.fun
        </Link>{" "}
        <small style={{ color: theme.palette.text.disabled }}>ゲーム垢</small>
        <br />
        <Link href="https://misskey.io/@tmd45">@tmd45@misskey.io</Link>{" "}
        <small style={{ color: theme.palette.text.disabled }}>ROM専</small>
      </Typography>

      <Typography variant="h6" pb="0.5rem" gutterBottom>
        Podcast / Game
      </Typography>
      <Typography variant="body1" pb="1rem" pl="0.5rem" gutterBottom>
        <Link href="https://www.youtube.com/@soramame_talk">
          YouTube『そらまめの空話』
        </Link>{" "}
        <small style={{ color: theme.palette.text.disabled }}>
          ほぼ毎週更新
        </small>
        <br />
        <Link href="https://www.youtube.com/@tania45jp">
          YouTube ゲーム配信
        </Link>{" "}
        <small style={{ color: theme.palette.text.disabled }}>
          ごくまれにやっています
        </small>
        <br />
        <Link href="https://steamcommunity.com/id/tania_45">Steam</Link>
        <br />
        <Link href="https://www.twitch.tv/tmd45">Twitch</Link>
      </Typography>

      <Typography variant="h6" pb="0.5rem" gutterBottom>
        Non active
      </Typography>
      <Typography variant="body1" pb="1rem" pl="0.5rem" gutterBottom>
        <Link href="https://www.instagram.com/tmd45/">Instagram</Link>
        <br />
        <Link href="https://facebook.com/tmd45">Facebook</Link>
        <br />
        <Link href="https://misskey.io/@tmd45">@tmd45@mstdn.jp</Link>
        <br />
        <Link href="https://twitter.com/tmd45">Twitter @tmd45</Link>
        <br />
        <Link href="https://twitter.com/tania45jp">Twitter @tania45jp</Link>
        <br />
        <Link href="https://qiita.com/tmd45">Qiita</Link>
      </Typography>

      <Typography variant="h5" pb="0.5rem" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" pb="1rem" pl="0.5rem" gutterBottom>
        <MailOutlineRoundedIcon
          fontSize="small"
          sx={{
            verticalAlign: "-5px",
          }}
        />{" "}
        tmd45[at]betaful.life
      </Typography>

      <ReturnTopFab />
      <Copyright />
    </>
  )
}
