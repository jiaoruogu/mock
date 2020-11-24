const express = require('express')
const router = express.Router()

router.post('/extend/post', (req, res) => {
    res.json({
      mes: '测试这个post好不好使'
    })
})

module.exports = router