import * as React from "react"
import { Link, Typography, useTheme } from "@mui/material"
import ReturnTopFab from "../components/ReturnTopFab"
import Copyright from "../components/Copyright"

interface ArticleItem {
  readonly title: string
  readonly url: string
}

const ARTICLES: readonly ArticleItem[] = [
  {
    title: "カスタマーサクセスエンジニアのお仕事 - Feedforce Developer Blog",
    url: "https://developer.feedforce.jp/entry/2021/04/09/120453",
  },
  {
    title: "Shopify アプリのリスト設定ポイント - Feedforce Developer Blog",
    url: "https://developer.feedforce.jp/entry/2020/12/23/093000",
  },
  {
    title:
      "いろんな本でつながった「認知（cognition）のはなし」 - Feedforce Developer Blog",
    url: "https://developer.feedforce.jp/entry/2020/08/28/183637",
  },
  {
    title:
      "iOS Safari を Mac Safari でデバッグするときの注意点 - Feedforce Developer Blog",
    url: "https://developer.feedforce.jp/entry/2020/04/20/201356",
  },
  {
    title: "認証認可の情報の追い方みたいな - Feedforce Developer Blog",
    url: "https://developer.feedforce.jp/entry/2020/01/10/185250",
  },
  {
    title:
      "ソーシャルPLUS の技術スタックを整理してみた - Feedforce Developer Blog",
    url: "https://developer.feedforce.jp/entry/2019/11/25/120000",
  },
  {
    title:
      'Slack に便利機能 "ワークフロービルダー" が増えたので勇み足で使ってみた - Feedforce Developer Blog',
    url: "https://developer.feedforce.jp/entry/2019/10/16/140901",
  },
  {
    title:
      "社内の情報共有ツールを Qiita:Team から esa に乗り換えました - Feedforce Developer Blog",
    url: "https://developer.feedforce.jp/entry/2019/08/22/141055",
  },
  {
    title:
      "『OAuth 2.0 の代表的な利用パターンを仕様から理解しよう』を読んだ話 - Feedforce Developer Blog",
    url: "https://developer.feedforce.jp/entry/2019/04/12/184013",
  },
  {
    title:
      "社内では開発チームマネージャーを名乗っています - Feedforce Developer Blog",
    url: "https://developer.feedforce.jp/entry/2018/12/05/110000",
  },
  {
    title:
      "社内勉強会で『Markdown と学ぶ HTML 基礎』を発表しました - Feedforce Developer Blog",
    url: "https://developer.feedforce.jp/entry/2018/10/12/184014",
  },
  {
    title:
      "GitHub 上でコミットハッシュにもとづく URL を得る - Feedforce Developer Blog",
    url: "https://developer.feedforce.jp/entry/2017/12/20/141220",
  },
  {
    title: "TypeScript 社内勉強会 完遂報告 - Feedforce Developer Blog",
    url: "https://developer.feedforce.jp/entry/2017/12/08/090000",
  },
  {
    title: "VSCode ファイル検索の除外設定 - Feedforce Developer Blog",
    url: "https://developer.feedforce.jp/entry/2017/11/24/195644",
  },
  {
    title: "VSCode の Multi-root workspace - Feedforce Developer Blog",
    url: "https://developer.feedforce.jp/entry/2017/11/14/121634",
  },
  {
    title:
      "このブログはGitHub Pages＋CircleCIで運用しています - feedforce Engineers' blog",
    url: "http://tech.feedforce.jp/github-pages-deploy-with-circleci.html",
  },
  {
    title:
      "Capybaraでドキュメント・メタデータが出力されていることを確認したい - feedforce Engineers' blog",
    url: "http://tech.feedforce.jp/capybara-rails_with_metadata.html",
  },
]

const SLIDES: readonly ArticleItem[] = [
  {
    title: "Misskeyのはなし（2023/03/17 FFLT#56） - Speaker Deck",
    url: "https://speakerdeck.com/tmd45/20230317-fflt56-misskeynohanasi",
  },
  {
    title: "手帳と文房具（2022/11/25 FFLT#52） - Speaker Deck",
    url: "https://speakerdeck.com/tmd45/20221125-fflt52-shou-zhang-towen-fang-ju",
  },
  {
    title: "認知のはなし（2020/08/28 FFTT#407） - Speaker Deck",
    url: "https://speakerdeck.com/tmd45/28-fftt-number-407",
  },
  {
    title:
      "認証認可の情報の追い方みたいな（2020/01/10 FFTT#381） - Speaker Deck",
    url: "https://speakerdeck.com/tmd45/10-fftt-number-381",
  },
  {
    title:
      "『OAuth 2.0 の代表的な利用パターンを仕様から理解しよう』を読んだ話（2019/04/12 FFTT#352） - Speaker Deck",
    url: "https://speakerdeck.com/tmd45/12-fftt-number-352",
  },
  {
    title:
      "Markdown と学ぶ HTML 基礎 第二版（2018/10/12 FFTT#331） - Speaker Deck",
    url: "https://speakerdeck.com/tmd45/12-fftt-number-331",
  },
  {
    title:
      "エラーメッセージと仲良くなる（2018/6/29 e-Navigator勉強会#3） - SlideShare",
    url: "https://www.slideshare.net/tmd45/2018629-enavigator3",
  },
  {
    title: "My HTML Dark Past（2017/12/08 社内LT大会） - Speaker Deck",
    url: "https://speakerdeck.com/tmd45/08-she-nei-ltda-hui",
  },
  {
    title:
      "FAPI Security について聞いてきた話（2017/08/18 社内勉強会） - Speaker Deck",
    url: "https://speakerdeck.com/tmd45/18-she-nei-mian-qiang-hui",
  },
  {
    title:
      "『オブジェクト指向設計実践ガイド』を読もう（2016/12/16 社内勉強会） - Speaker Deck",
    url: "https://speakerdeck.com/tmd45/16-she-nei-mian-qiang-hui",
  },
  {
    title: "HTTP/ 2 in nginx（2016/3/11 社内勉強会） - Speaker Deck",
    url: "https://speakerdeck.com/tmd45/11-she-nei-mian-qiang-hui",
  },
  {
    title: "Android アプリ開発入門（2015/6/19 社内勉強会） - Speaker Deck",
    url: "https://speakerdeck.com/tmd45/19-she-nei-mian-qiang-hui",
  },
  {
    title: "Middlemanで個人ページを作っている話 - Speaker Deck",
    url: "https://speakerdeck.com/tmd45/middlemandege-ren-peziwozuo-tuteiruhua",
  },
  {
    title: "Git 入門（2014/1/10 社内勉強会） - Speaker Deck",
    url: "https://speakerdeck.com/tmd45/10-she-nei-mian-qiang-hui",
  },
  {
    title: "Git&GitHubで共同作業〜入門編 - Speaker Deck",
    url: "https://speakerdeck.com/tmd45/git-and-githubdekiyoudousa",
  },
]

const ArticleItem: React.FC<{ readonly item: ArticleItem }> = ({ item }) => {
  return (
    <>
      <Link href={item.url}>{item.title}</Link>
      <br />
    </>
  )
}

export default function ArticlesPage() {
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
        Articles
      </Typography>

      <Typography variant="h5" pb="0.5rem" gutterBottom>
        Blog
      </Typography>
      <Typography variant="body1" pb="1rem" pl="0.5rem" gutterBottom>
        {ARTICLES.map((item) => (
          <ArticleItem key={item.title} item={item} />
        ))}
      </Typography>

      <Typography variant="h5" pb="0.5rem" gutterBottom>
        Slides
      </Typography>
      <Typography variant="body1" pb="1rem" pl="0.5rem" gutterBottom>
        {SLIDES.map((item) => (
          <ArticleItem key={item.title} item={item} />
        ))}
      </Typography>

      <ReturnTopFab />
      <Copyright />
    </>
  )
}
