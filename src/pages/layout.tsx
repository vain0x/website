import { h } from "hyperapp"

export default (contents: JSX.Element) => (
  <html lang="ja">
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>vain0x's Page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" type="text/css" media="screen" href="/index.css" />
    </head>
    <body id="app">
      <header>
        <div class="app-header-contents">
          <a href="/">
            <h1>
              vain0x's Page
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
          <a href="/about">
            About
          </a>
        </div>
      </header>

      <main>
        {contents}
      </main>
    </body>
  </html>
)
