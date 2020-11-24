// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express')
const router = express.Router()

router.get('/simple/get/haha', function (req, res) {
  res.json({
    mes: '测试这个get好不好使'
  })
})



module.exports = router
