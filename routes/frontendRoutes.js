const {home,about,service,contact  } = require('../controllers/frontendController')
const express = require('express')
const router = express.Router()

router.get('/', home)
router.get('/about',about)
router.get('/service',service)
router.get('/contact',contact)

module.exports = router