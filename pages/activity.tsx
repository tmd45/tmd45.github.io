import * as React from "react"
import { Button, ButtonGroup, Link, Typography, useTheme } from "@mui/material"
import ReturnTopFab from "../components/ReturnTopFab"
import Copyright from "../components/Copyright"

interface ActivityItem {
  readonly date: string
  readonly title: string
  readonly url?: string
  readonly tips?: string
}

interface ActivityItems {
  readonly year: string
  activityItem: ActivityItem[]
}

const YEARS = [
  "2023",
  // "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2010",
  "2009",
]

const ACTIVITIES: readonly ActivityItems[] = [
  {
    year: "2023",
    activityItem: [
      {
        date: "2023-03-21",
        title: "サイトリニューアル",
      },
    ],
  },
  {
    year: "2021",
    activityItem: [
      {
        date: "2021-09-01",
        title: "join Social PLUS Inc.",
        tips: "change!",
      },
    ],
  },
  {
    year: "2020",
    activityItem: [
      {
        date: "2020-03-27",
        title: "フルリモートワーク 開始",
        tips: "change!",
      },
      {
        date: "2020-02-11",
        title: "大江戸Ruby会議08",
        url: "https://blog.tmd45.jp/entry/2020/02/16/175209",
      },
      {
        date: "2020-02-05",
        title: "AWS Nyantech ~ Deploy Cat Friendly World ~",
        url: "https://blog.betaful.life/entry/2020/02/05/230639",
      },
      {
        date: "2020-01-24",
        title: "OpenID Summit Tokyo 2020",
        url: "https://blog.betaful.life/entry/2020/01/26/130923",
      },
    ],
  },
  {
    year: "2019",
    activityItem: [
      {
        date: "2019-06-26",
        title: "会社の情報共有ツールを esa に移行",
        url: "https://developer.feedforce.jp/entry/2019/08/22/141055",
      },
      {
        date: "2019-06-06",
        title: "Authleteで体験するOAuth / OpenID Connectサーバーのキホン",
        url: "https://authlete.connpass.com/event/130452/",
      },
      {
        date: "2019-03-23 〜 2019-03-24",
        title: "FFXIV ファンフェスティバル 2019 in 東京",
        url: "https://fanfest.finalfantasyxiv.com/2018-19/jp/",
      },
    ],
  },
  {
    year: "2018",
    activityItem: [
      {
        date: "2018-08-11",
        title: "初救急車（パニック発作）",
      },
      {
        date: "2018-07-15",
        title: "高専カンファレンス in 東京 2018",
        url: "https://kosenconf.tokyo/",
      },
      {
        date: "2018-04-24",
        title: "親知らず抜歯",
      },
    ],
  },
  {
    year: "2017",
    activityItem: [
      {
        date: "2017-04-29",
        title: "家族（猫・千代助）が増えました",
        tips: "change!",
      },
      {
        date: "2017-03-25",
        title: "高専カンファレンス in 東京",
        url: "http://kosenconf.jp/?109tokyo",
      },
      {
        date: "2017-03-20",
        title: "大江戸Ruby会議06",
        url: "http://regional.rubykaigi.org/oedo06/",
      },
      {
        date: "2017-01-09",
        title: "乳がん手術",
        tips: "change!",
      },
    ],
  },
  {
    year: "2016",
    activityItem: [
      {
        date: "2016-12-24 〜 2016-12-25",
        title: "FFXIV ファンフェスティバル 2016 in 東京",
        url: "http://ffxiv-fanfest.com/jp/",
      },
      {
        date: "2016-11-14",
        title: "乳がん告知",
        tips: "change!",
      },
      {
        date: "2016-09-29",
        title: "LINE DEVELOPER DAY 2016",
        url: "http://linedevday.linecorp.com/jp/2016/",
      },
      {
        date: "2016-03-12",
        title: "にいがた酒の陣 2016",
        url: "http://sakenojin.jp/",
      },
      {
        date: "2016-02-18 〜 2016-02-19",
        title: "Developers Summit 2016 冬",
        url: "http://event.shoeisha.jp/devsumi/20160218/",
      },
      {
        date: "2016-02-08",
        title: "「nginx実践入門」出版記念！執筆者らが語る nginx Tech Talks",
        url: "http://eventdots.jp/event/578421",
      },
    ],
  },
  {
    year: "2015",
    activityItem: [
      {
        date: "2015-12-30",
        title: "コミックマーケット89 2日目 サークル参加（東ウ26a）",
        url: "http://www.comiket.co.jp/info-a/C89/C89info.html",
      },
      {
        date: "2015-11-08",
        title: "大江戸Ruby会議05",
        url: "http://regional.rubykaigi.org/oedo05/",
      },
      {
        date: "2015-10-04",
        title: "リアル脱出ゲーム『僕と勇者の最後の７日間』",
        url: "http://realdgame.jp/event/boku7days.html",
      },
      {
        date: "2015-09-06",
        title: "ぶらり酒散歩2015",
        url: "https://www.facebook.com/pages/%E5%8D%83%E4%BD%8F%E9%85%92%E5%90%88%E6%88%A6/261235994059960",
      },
      {
        date: "2015-08-26",
        title: "OpenID TechNight Vol.13 - ID連携入門",
        url: "https://openid.doorkeeper.jp/events/29487",
      },
      {
        date: "2015-08-21 〜 2015-08-22",
        title: "YAPC::Asia Tokyo 2015",
        url: "http://yapcasia.org/2015/",
      },
      {
        date: "2015-03-14",
        title: "にいがた酒の陣 2015",
        url: "http://sakenojin.jp/",
      },
    ],
  },
  {
    year: "2014",
    activityItem: [
      {
        date: "2014-12-29",
        title: "コミックマーケット87 2日目 サークル参加（東ア60b）",
        url: "http://www.comiket.co.jp/info-a/C87/C87info.html",
      },
      {
        date: "2014-12-20 〜 2014-12-21",
        title: "FFXIV ファンフェスティバル 2014 in 東京",
        url: "http://ffxiv-fanfest.com/jp/",
      },
      {
        date: "2014-09-18 〜 2014-09-20",
        title: "RubyKaigi 2014",
        url: "http://rubykaigi.org/2014",
      },
      {
        date: "2014-08-31",
        title: "KosenDJ-bu #2",
        url: "http://kosendj-bu.in/",
      },
      {
        date: "2014-08-03",
        title: "エオルゼアカフェ SORAMAMEオフ会",
        url: "http://www.pasela.co.jp/paselabo_shop/ff_eorzea/",
      },
      {
        date: "2014-06-14",
        title: "高専カンファレンス6周年パーティ",
        url: "http://kosenconf.doorkeeper.jp/events/11521",
      },
      {
        date: "2014-06-01",
        title: "GitHub Kaigi",
        url: "http://githubkaigi.org/",
      },
      {
        date: "2014-05-10",
        title: "Railsセミナー: Why choose Ruby on Rails ?",
        url: "http://atnd.org/events/49952",
      },
      {
        date: "2014-04-19",
        title: "大江戸Ruby会議04",
        url: "http://regional.rubykaigi.org/oedo04/",
      },
      {
        date: "2014-03-29",
        title: "TokyuRuby会議07",
        url: "http://regional.rubykaigi.org/tokyu07",
      },
      {
        date: "2014-03-22",
        title: "高専カンファレンス in 東京 2014",
        url: "http://kosenconf.doorkeeper.jp/events/7837",
      },
    ],
  },
  {
    year: "2013",
    activityItem: [
      {
        date: "2013-08-01",
        title: "join Feedforce Inc.",
        tips: "change!",
      },
      {
        date: "2013-06-15",
        title: "高専カンファレンス 5 周年記念パーティ",
        url: "http://kosenconf.github.io/5th-anniversary/",
      },
    ],
  },
  {
    year: "2012",
    activityItem: [
      {
        date: "2012-09-23",
        title: "FuelPHP 勉強会 東京 vol.2",
        url: "http://atnd.org/events/31017",
      },
      {
        date: "2012-09-15",
        title: "PHP カンファレンス 2012",
        url: "http://phpcon.php.gr.jp/w/2012/",
      },
      {
        date: "2012-09-07 〜 2012-09-08",
        title:
          "オープンソースカンファレンス2012 Tokyo/Fall（2日目 13:00～参加）",
        url: "http://www.ospn.jp/osc2012-fall/",
      },
      {
        date: "2012-08-04",
        title: "Lightweight Language Decade",
        url: "http://ll.jus.or.jp/2012/",
      },
      {
        date: "2012-07-08",
        title: "FuelPHP勉強会 東京",
        url: "http://atnd.org/event/fuelphp/0",
      },
      {
        date: "2012-02-25",
        title: "東京ついモフ★猫カフェ読書会～2012云々",
        url: "http://atnd.org/events/24986",
        tips: "主催",
      },
    ],
  },
  {
    year: "2011",
    activityItem: [
      {
        date: "2011-09-17",
        title: "ITコミュニティ夏祭り",
        url: "http://tcc.nifty.com/cs/catalog/tcc_schedule/catalog_110816203681_1.htm",
      },
      {
        date: "2011-07-30",
        title: "駄目な文房具ナイトEX",
        url: "http://tcc.nifty.com/cs/catalog/tcc_schedule/catalog_091202202710_1.htm",
      },
      {
        date: "2011-07-16",
        title: "高専カンファレンス in 長野2",
        url: "http://kosenconf.jp/?034nagano",
      },
      {
        date: "2011-06-25",
        title: "高専女子カンファレンス2",
        url: "http://kosenconf.jp/?030joshi-tokyo",
      },
      {
        date: "2011-06-16",
        title: "ACT in agile",
        url: "http://atnd.org/events/16018",
      },
      {
        date: "2011-05-14",
        title: "CodeIgniter 東京勉強会",
        url: "http://coolnotify.com/cicon",
      },
      {
        date: "2011-04-30",
        title: "東京ついモフ★猫カフェ読書会〜2011春暖の候",
        url: "http://atnd.org/events/12602",
        tips: "主催",
      },
      {
        date: "2011-04-23",
        title: "DevLOVE 今、未来に繋がるために帆を立てるとき。",
        url: "http://kokucheese.com/event/index/9778/",
      },
      {
        date: "2011-04-09",
        title: "DevLOVE Beautiful Development",
        url: "http://kokucheese.com/event/index/9530/",
      },
      {
        date: "2011-03-21",
        title: "PHP技術者認定試験対策口座＋試験（再）",
        url: "https://www.asial.co.jp/school/course_detail/19",
      },
      {
        date: "2011-03-11",
        title: "PHP技術者認定試験対策口座＋試験",
        url: "https://www.asial.co.jp/school/course_detail/19",
        tips: "震災",
      },
      {
        date: "2011-02-26",
        title: "駄目な文房具ナイト4",
        url: "http://tcc.nifty.com/cs/catalog/tcc_schedule/catalog_110112203353_1.htm",
      },
      {
        date: "2011-02-12",
        title: "高専カンファレンス in サレジオ2",
        url: "http://kosenconf.jp/?020salesio",
      },
      {
        date: "2011-01-15",
        title: "東京ついモフ★猫カフェ読書会〜2011新春",
        url: "http://atnd.org/events/10908",
        tips: "主催",
      },
      {
        date: "2011-01-09",
        title: "2011年高専クラスタ新年会",
        url: "http://atnd.org/events/11157",
      },
    ],
  },
  {
    year: "2010",
    activityItem: [
      {
        date: "2010-12-21",
        title: "PHP 『 超 』 初心者勉強会 基礎編",
        url: "http://atnd.org/events/10093",
      },
      {
        date: "2010-10-02",
        title: "高専カンファレンス 2010秋 in 東京",
        url: "http://kosenconf.jp/?014tokyo",
      },
      {
        date: "2010-09-06",
        title: "Eclipse DemoCamp Helios 2010 Tokyo",
        url: "http://wiki.eclipse.org/Eclipse_DemoCamps_Helios_2010/Tokyo",
      },
      {
        date: "2010-07-31",
        title: "Lightweight Language Tiger",
        url: "http://ll.jus.or.jp/2010/",
      },
      {
        date: "2010-07-24",
        title: "東京ついモフ★猫カフェ読書会",
        url: "http://atnd.org/events/6008",
        tips: "主催",
      },
      {
        date: "2010-05-15",
        title: "デザイン・フェスタ vol.31",
        url: "http://www.designfesta.com/",
      },
      {
        date: "2010-04-17",
        title: "東京つい飲み★2010春〜華は無くとも酒は美味い！",
        url: "http://atnd.org/events/3337",
        tips: "主催",
      },
      {
        date: "2010-03-07",
        title: "Poken Meet Up in Nagoya #pmun",
        url: "http://atnd.org/events/3064",
      },
      {
        date: "2010-02-20",
        title: "Twitter京王沿線deオフ #keioff",
        url: "http://twtvite.com/2c6hl2",
      },
      {
        date: "2010-02-13",
        title: "人見知りのための餃子ツイノミ",
        url: "http://atnd.org/events/2893",
      },
      {
        date: "2010-01-21",
        title:
          "SocialWeb2.0Partyニューイヤー・スペシャルセッション2WeekNight－第1夜－",
        url: "http://atnd.org/events/2783",
      },
      {
        date: "2010-01-09",
        title: "東京つい飲み★2010新年会",
        url: "http://atnd.org/events/2619",
        tips: "主催",
      },
    ],
  },
  {
    year: "2009",
    activityItem: [
      {
        date: "2009-10-17",
        title: "ジャパン・アニメコラボ・マーケット2009",
        url: "http://www.jam-anime.jp/",
      },
      {
        date: "2009-09-22",
        title: "東京#twinomi ツイッター飲み会 in 新宿",
        url: "http://kokucheese.com/event/index/444/",
        tips: "主催",
      },
    ],
  },
]

const ActivityOfYear: React.FC<{
  readonly year: string
}> = ({ year }) => {
  const yearActivity = ACTIVITIES.find((activity) => {
    return activity.year === year
  })

  // ACTIVITIES に定義の無い年はスキップ
  if (!yearActivity) return

  return (
    <>
      <Typography variant="h5" pt="2rem" id={year} gutterBottom>
        {year}
      </Typography>

      {yearActivity.activityItem.map((act) => (
        <ActivityItem key={act.title} item={act} />
      ))}
    </>
  )
}

const ActivityItem: React.FC<{
  readonly item: ActivityItem
}> = ({ item }) => {
  const theme = useTheme()

  const item_link = (
    <Link href={item.url} target="_blank">
      {item.title}
    </Link>
  )
  const tips = (
    <>
      {" "}
      <small style={{ color: theme.palette.secondary.main }}>{item.tips}</small>
    </>
  )

  return (
    <>
      <Typography variant="h6" pl="0.5rem">
        {item.date}
        {item.tips ? tips : undefined}
      </Typography>
      <Typography variant="body1" pl="1rem" gutterBottom>
        {item.url ? item_link : item.title}
      </Typography>
    </>
  )
}

export default function ActivityPage() {
  const theme = useTheme()

  const anchors = YEARS.map((value) => (
    // eslint-disable-next-line react/jsx-key
    <Button href={`#${value}`}>{value}</Button>
  ))

  const activities = YEARS.map((value) => (
    // eslint-disable-next-line react/jsx-key
    <ActivityOfYear year={value} />
  ))

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
        Activity
      </Typography>
      <ButtonGroup variant="text" size="small" fullWidth>
        {anchors}
      </ButtonGroup>

      {activities}

      <ReturnTopFab />
      <Copyright />
    </>
  )
}
