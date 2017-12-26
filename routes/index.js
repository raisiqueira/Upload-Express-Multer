const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send({ menssage: 'You shall not pass! 🧙‍♀️' })
})

module.exports = router
