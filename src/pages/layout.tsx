import { h } from "hyperapp"

const favicon = (
  <img
    class="app-header-logo"
    src="https://vain0x.github.com/blog/favicon.jpg"
    width={24} height={24} alt="vain0x-avatar" />
)

export default (contents: JSX.Element) => (
  <html lang="ja">
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>vain0x's Page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" type="text/css" media="screen" href="/index.css" />
      <link rel="icon" type="image/png" href="/favicon.jpg" />
    </head>
    <body id="app">
      <header class="app-header-container g-nav">
        <div class="app-header-contents">
          <a href="/">
            <h1>
              {favicon}'s Page
            </h1>
          </a>
          <a href="https://vain0x.github.io/blog/">
            ブログ
          </a>
          <a href="https://note.mu/vain0x/m/m9aa8513f4e97">
            競プロ参戦記
          </a>
          <a href="https://github.com/vain0x">
            GitHub
          </a>
        </div>
      </header>

      <main class="app-main-container">
        {contents}
      </main>
    </body>
  </html>
)
