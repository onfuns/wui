import { css } from 'docz-plugin-css'
export default {
  title: 'wui',
  description: 'wui, 轻量级 React UI 框架',
  codeSandbox: false,
  typescript: true,
  indexHtml: 'docz/index.html',
  htmlContext: {
    favicon: '//image.onfuns.com/favicon.ico'
  },
  plugins: [
    css({
      preprocessor: 'less'
    })
  ]
}
