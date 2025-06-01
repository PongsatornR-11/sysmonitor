const express = require('express')
const router = express.Router()
const {
    getSystemData,
    getBasicSystemData,
    getCPUData,
    getNetworkData,
    getDiskData,
    getServicesData,
    getNetworkConnections,
    getMemoryData,
    getBasicOsData,
    getFansSpeed,
    getOSVersionsData,
} = require('../controllers/sysdata')


router.get('/sys_data', getSystemData)
router.get('/sys_basic_data', getBasicSystemData)
router.get('/CPU_data', getCPUData)
router.get('/network_data', getNetworkData)
router.get('/disk_data', getDiskData)
router.get('/connect_data', getNetworkConnections)
router.get('/mem_data', getMemoryData)
router.get('/service_data', getServicesData)
router.get('/os_data', getBasicOsData)
router.get('/fans_speed', getFansSpeed)
router.get('/os_version', getOSVersionsData)

module.exports = router