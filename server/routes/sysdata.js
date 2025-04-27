const express = require('express')
const router = express.Router()
const { getSystemData, getBasicSystemData, getCPUData, getNetworkData } = require('../controllers/sysdata')


router.get('/sys_data', getSystemData)
router.get('/sys_basic_data', getBasicSystemData)
router.get('/CPU_data', getCPUData)
router.get('/network_data', getNetworkData)

module.exports = router