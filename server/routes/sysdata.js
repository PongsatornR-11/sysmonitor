const express = require('express')
const router = express.Router()
const { getSystemData, getBasicSystemData, getCPUData, getNetworkData, getDiskData, getNetworkConnections} = require('../controllers/sysdata')


router.get('/sys_data', getSystemData)
router.get('/sys_basic_data', getBasicSystemData)
router.get('/CPU_data', getCPUData)
router.get('/network_data', getNetworkData)
router.get('/disk_data', getDiskData)
router.get('/connect_data', getNetworkConnections)

module.exports = router