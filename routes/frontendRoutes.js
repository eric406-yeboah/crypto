const {home  } = require('../controllers/frontendController')
const express = require('express')
const router = express.Router()

router.get('/', home)

module.exports = router