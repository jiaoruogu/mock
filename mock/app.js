const express = require('express')
const fs = require('fs')
const app = express()

const port = process.env.PORT || 8848

fs.readdirSync(`${__dirname}/router`).forEach(fileName => {
  const singleRouterFile = require(`./router/${fileName}`)
  app.use(singleRouterFile)
})


module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl + C to stop`)
})
