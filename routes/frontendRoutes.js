const {home,contact  } = require('../controllers/frontendController')
const express = require('express')
const router = express.Router()

router.get('/', home)
router.get('/contact',contact)

module.exports = router