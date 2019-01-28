import { h } from "hyperapp"
import layout from "./layout"

interface Project {
  icon?: JSX.Element,
  title: string,
  url: string,
  summary?: string,
  description: string | JSX.Element,
}

const MAIL_ADDRESS = "vainzerox@gmail.com"

const githubIconWithSize = (size: number) => (
  <img
    class="g-github-icon"
    src="/images/GitHub-Mark-32px.png"
    width={size} height={size} alt="GitHub" />
)

const githubIcon = githubIconWithSize(24)

const githubIconTiny = githubIconWithSize(8)

const qiitaIcon = (
  <div class="g-qiita-icon">Q</div>
)

const atcoderIcon = (
  <div class="g-atcoder-icon">A</div>
)

const hyperapp = (
  <a href="https://github.com/jorgebucaran/hyperapp">
    hyperapp {githubIconTiny}
  </a>
)

const projects: Project[] = [
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
    title: "ミローネ言語",
    url: "https://github.com/vain0x/milone-lang",
    summary: "F# サブセットコンパイラ",
    description: `
      コンパイラでコンパイラ自身をコンパイルする「セルフホスティング」を目指しています。
    `,
  },
  {
    icon: githubIcon,
    title: "HSP3 DEBUG GINGER",
    url: "https://github.com/hsp3-debug-gigner",
    summary: "VSCode 対応の HSP3 デバッガー",
    description: `
      HSP3 デバッガーの第二弾です。
      デバッガーの汎用プロトコル DAP をサポートしています。
    `,
  },
  {
    icon: githubIcon,
    title: "vain0x's Page",
    url: "https://github.com/vain0x/website",
    summary: "ポートフォリオ",
    description: (<span>
      このウェブサイトのソースコードです。
      SPA フレームワーク {hyperapp} の SSR で静的に HTML を生成する試みをしています。
    </span>),
  },
]

const articles: Project[] = [
  {
    title: "競プロ参戦記",
    url: "https://note.mu/vain0x/m/m9aa8513f4e97",
    description: "競技プログラミングの問題を解いたあと、その考察を自分なりに書いていくブログです。",
  },
  {
    icon: qiitaIcon,
    title: "LSP学習記",
    url: "https://qiita.com/vain0x/items/d050fe7c8b342ed2004e",
    description: "プログラミング言語の入力支援などを行う機能を開発していく記事です。",
  },
]

const renderProject = (project: Project) => (
  <section class="project">
    <h3 class="project-heading g-nav">
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

export default layout(
  <article class="page-index">
    <div>
      <strong>vain0x</strong> はプログラミング言語処理系を作る人です。
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
        title: "AtCoder @vain0x",
        url: "https://atcoder.jp/users/vain0",
        description: (
          <div>
            最高レート:
            <span class="g-atcoder-rate-blue">1775</span>
            (<datetime>2019/1/28</datetime> 現在)
        </div>
        ),
      })}
    </section>

    <h2 class="g-article-section">
      コンタクト
    </h2>

    <section class="contacts">
      <div>メール</div>
      <div><code>{MAIL_ADDRESS}</code></div>

      <div>Twitter</div>
      <div><a href="https://twitter.com/vain0x">@vain0x</a></div>
    </section>
  </article>,
)
