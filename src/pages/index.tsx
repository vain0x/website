import { h } from "hyperapp"
import layout from "./layout"

interface Project {
  icon?: JSX.Element,
  title: string,
  url: string,
  summary?: string,
  description: string | JSX.Element,
}

const githubIconWithSize = (size: number) => (
  <img
    class="g-github-icon"
    src="/images/GitHub-Mark-32px.png"
    width={size} height={size} alt="GitHub" />
)

const githubIcon = githubIconWithSize(24)

const selfIcon = (
  <img
    class="g-self-icon"
    src="/favicon.jpg"
    width={24} height={24} alt="vain0x avatar" />
)

const qiitaIcon = (
  <div class="g-qiita-icon">Q</div>
)

const atcoderIcon = (
  <div class="g-atcoder-icon">A</div>
)

const projects: Project[] = [
  {
    icon: githubIcon,
    title: "ミローネ言語",
    url: "https://github.com/vain0x/milone-lang",
    summary: "F# サブセット言語のコンパイラ",
    description: (
      <div>
        コンパイラでコンパイラ自身をコンパイルする「セルフホスティング」を達成しました。
        (<a href="https://qiita.com/vain0x/items/00c554517961e53f945a">記事</a>)
      </div>
    ),
  },
  {
    icon: githubIcon,
    title: "knowbug",
    url: "https://github.com/vain0x/knowbug",
    summary: "HSP3 の自作デバッガー",
    description: `
      スクリプト言語 HSP3 のデバッガーです。
      コミュニティで一定の評価を得ました。
    `,
  },
  {
    icon: githubIcon,
    title: "HSP3 GINGER",
    url: "https://github.com/vain0x/hsp3-ginger",
    summary: "HSP3 開発ツール群",
    description: `
      HSP3 の入力支援ツール (LSP サーバ) やビルドツール、VSCode 上で HSP3 の開発を行うための拡張機能などを作っています。
    `,
  },
  {
    icon: githubIcon,
    title: "vain0x's Page",
    url: "https://github.com/vain0x/website",
    summary: "ポートフォリオ",
    description: `
      このウェブサイトのソースコードです。手作りの CSS と、JavaScript (JSX) で静的に生成した HTML という構成。
    `,
  },
]

const articles: Project[] = [
  {
    icon: qiitaIcon,
    title: "競プロ参戦記",
    url: "https://qiita.com/tags/%E7%AB%B6%E3%83%97%E3%83%AD%E5%8F%82%E6%88%A6%E8%A8%98",
    description: "競技プログラミングの問題を解いたあと、その考察を自分なりに書いていく連載です。",
  },
  {
    icon: qiitaIcon,
    title: "LSP学習記",
    url: "https://qiita.com/vain0x/items/d050fe7c8b342ed2004e",
    description: "プログラミング言語の入力支援などを行う機能を開発していく連載です。",
  },
  {
    icon: selfIcon,
    title: "vain0x's blog",
    url: "/blog",
    description: "技術ブログです。1ヶ月ごとに活動の概要をまとめた近況記事などを書いています。",
  },
]

const renderProject = (project: Project) => (
  <section class="project">
    <h3 class="project-heading">
      <a href={project.url}>
        {project.icon && (
          <span class="project-heading-icon">
            {project.icon}
          </span>
        )}

        {project.title}
      </a>
    </h3>

    <div class="project-summary">
      {project.summary}
    </div>

    <div class="project-description">
      {project.description}
    </div>
  </section>
)

export default layout((
  <article class="app-main-contents page-index">
    <div>
      <strong>ベイン</strong> (@vain0x) はプログラミング言語処理系を作る人です。
    </div>

    <h2 class="g-article-section">
      プロジェクト
    </h2>

    <section class="projects">
      {projects.map(renderProject)}
    </section>

    <h2 class="g-article-section">
      技術記事
    </h2>

    <section class="projects">
      {articles.map(renderProject)}
    </section>

    <h2 class="g-article-section">
      競技プログラミング
    </h2>

    <section class="projects">
      {renderProject({
        icon: atcoderIcon,
        title: "AtCoder @vain0",
        url: "https://atcoder.jp/users/vain0",
        description: (
          <div>
            最高レート:
            <span class="g-atcoder-rate-blue">1850</span>
            (<datetime>2019/6/9</datetime> 現在)
          </div>
        ),
      })}
    </section>

    <h2 class="g-article-section">
      OSS 活動
    </h2>

    <section class="oss-activity">
      <h3 class="oss-activity-heading">
        OpenHSP
      </h3>

      <div class="oss-activity-description">
        OpenHSP とは、スクリプト言語 HSP3 の処理系を開発する公式のプロジェクト。過去3回、機能の追加や修正のパッチを送って取り込んでいただきました。
        (
          <ul className="g-inline-list">
            <li>
              <a href="http://dev.onionsoft.net/trac/openhsp/changeset/423">r423 (2010)</a>,
            </li>
            <li>
              <a href="http://dev.onionsoft.net/trac/openhsp/changeset/754">r754 (2015)</a>,
            </li>
            <li>
              <a href="http://dev.onionsoft.net/trac/openhsp/changeset/795">r795 (2016)</a>
            </li>
          </ul>
        )
      </div>
    </section>

    <h2 class="g-article-section">
      コンタクト
    </h2>

    <section class="contacts">
      <div>メール</div>
      <div><code>vainzerox@gmail.com</code></div>

      <div>Twitter</div>
      <div><a href="https://twitter.com/vain0x">@vain0x</a></div>

      <div>マシュマロ</div>
      <div><a href="https://marshmallow-qa.com/vain0x?utm_medium=url_text&amp;utm_source=promotion">@vain0x</a></div>
    </section>
  </article>
))
