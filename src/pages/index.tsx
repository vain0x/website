import { h } from "hyperapp"
import layout from "./layout"

const projects = [
  {
    title: "knowbug",
    github: "https://github.com/vain0x/knowbug",
    summary: "HSP3 の自作デバッガー",
    description: "スクリプト言語 HSP3 のデバッガーです。界隈で一定の評価を得ました。",
  },
  {
    title: "ミローネ言語",
    github: "https://github.com/vain0x/milone-lang",
    summary: "F# サブセットコンパイラ",
    description: "プログラミング言語 F# で書かれている、F# のサブセットのコンパイラです。コンパイラでコンパイラ自身をコンパイルする「セルフホスティング」を目指しています。",
  },
  {
    title: "HSP3 DEBUG GINGER",
    github: "https://github.com/hsp3-debug-gigner",
    summary: "VSCode 対応の HSP3 デバッガー",
    description: "デバッガーの汎用プロトコル DAP をサポートしている。",
  },
  {
    title: "vain0x.github.io",
    github: "https://github.com/vain0x/website",
    summary: "このウェブサイト",
    description: "SPA の SSR 機能をテンプレートエンジン代わりにするという試みをしています。",
  },
]

const githubIcon = (
  <img src="/images/GitHub-Mark-32px.png" width={32} height={32} alt="GitHub" />
)

export default layout(
  <article class="page-index">
    <div>
      <strong>vain0x</strong> はプログラミング言語処理系を作っています。
    </div>

    <h2>
      プロジェクトリスト
    </h2>

    <section class="projects">
      {projects.map(project => (
        <section class="project">
          <h3 class="project-heading">
            <a class="github-link" href={project.github}>
              {githubIcon}
            </a>

            {project.title}
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
  </article>,
)
