const history = require('connect-history-api-fallback')
const config = require('./config')
const path = require('path')
const express = require('express')
const webpack = require('webpack')

const port = process.env.PORT || config.dev.port
const app = express()
const webpackConfig = require('./webpack.config.dev')
const compiler = webpack(webpackConfig)

app.use(
  history({
    rewrites: [{ from: /\w+\.html/, to: '/' }]
  })
)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})
app.use(require('webpack-hot-middleware')(compiler))
app.use(devMiddleware)

app.use(path.posix.join('', config.dev.publicPath), express.static('./static'))

const uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function() {
  console.log('> Listening at ' + uri + '\n')
})
app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }
})
