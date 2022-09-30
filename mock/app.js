const express = require('express')
const fs = require('fs')
const app = express()

// post接收request body 的json数据
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const port = process.env.PORT || 8848

fs.readdirSync(`${__dirname}/router`).forEach(fileName => {
  const singleRouterFile = require(`./router/${fileName}`)
  app.use(singleRouterFile)
})


module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl + C to stop`)
})
