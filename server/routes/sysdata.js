const express = require('express')
const { getSystemData } = require('../controllers/sysdata')
const router = express.Router()


router.get('/sys_data', getSystemData)

module.exports = router