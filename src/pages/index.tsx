import { h } from "hyperapp"
import layout from "./layout"

const githubIconWithSize = (size: number) => (
  <img
    class="github-icon"
    src="/images/GitHub-Mark-32px.png"
    width={size} height={size} alt="GitHub" />
)

const githubIcon = githubIconWithSize(32)

const githubIconTiny = githubIconWithSize(8)

const hyperapp = (
  <a href="https://github.com/jorgebucaran/hyperapp">
    hyperapp {githubIconTiny}
  </a>
)

const projects = [
  {
    title: "knowbug",
    github: "https://github.com/vain0x/knowbug",
    summary: "HSP3 の自作デバッガー",
    description: `
      スクリプト言語 HSP3 のデバッガーです。
      コミュニティで一定の評価を得ました。
    `,
  },
  {
    title: "ミローネ言語",
    github: "https://github.com/vain0x/milone-lang",
    summary: "F# サブセットコンパイラ",
    description: `
      プログラミング言語 F# のサブセットである「ミローネ言語」のコンパイラを F# で書くプロジェクトです。
      コンパイラでコンパイラ自身をコンパイルする「セルフホスティング」を目指しています。
    `,
  },
  {
    title: "HSP3 DEBUG GINGER",
    github: "https://github.com/hsp3-debug-gigner",
    summary: "VSCode 対応の HSP3 デバッガー",
    description: `
      HSP3 デバッガーの第二弾です。
      デバッガーの汎用プロトコル DAP をサポートしています。
    `,
  },
  {
    title: "vain0x's Page",
    github: "https://github.com/vain0x/website",
    summary: "ポートフォリオ",
    description: (<span>
      このウェブサイトのソースコードです。
      SPA フレームワーク {hyperapp} の SSR 機能をテンプレートエンジン代わりにするという試みをしています。
    </span>),
  },
]

const articles = [
  {
    title: "競プロ参戦記",
    url: "https://note.mu/vain0x/m/m9aa8513f4e97",
    description: "競技プログラミングの問題を解いたあと、その考察を自分なりに書いていくブログです。",
  },
  {
    title: "LSP学習記",
    url: "[https://qiita.com/vain0x/items/d050fe7c8b342ed2004e",
    description: "プログラミング言語の入力支援などを行う機能を開発していく記事です。",
  },
]

export default layout(
  <article class="page-index">
    <div>
      <strong>vain0x</strong> はプログラミング言語処理系を作る人です。
    </div>

    <h2 class="g-article-section">
      プロジェクト
    </h2>

    <section class="projects">
      {projects.map(project => (
        <section class="project">
          <h3 class="project-heading g-nav">
            <a class="github-link" href={project.github}>
              {githubIcon}
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
      ))}
    </section>

    <h2 class="g-article-section">
      技術記事
    </h2>

    <section class="projects">
      {articles.map(article => (
        <section class="project">
          <h3 class="project-heading g-nav">
            <a href={article.url}>
              {article.title}
            </a>
          </h3>

          <div class="project-description">
            {article.description}
          </div>
        </section>
      ))}
    </section>
  </article>,
)
