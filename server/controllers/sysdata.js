const si = require('systeminformation');
const fs = require('fs').promises;

exports.getSystemData = async (req, res) => {
    try {
        // Get all system information in parallel
        const [
            cpuLoad,
            cpuTemp,
            memory,
            disk,
            network,
            time
        ] = await Promise.all([
            si.currentLoad(),
            si.cpuTemperature(),
            si.mem(),
            si.fsSize(),
            si.networkInterfaces(),
            si.time()
        ]);

        // Calculate actual used memory (excluding cached and buffered)
        const actualUsedMemory = memory.used - (memory.cached + memory.buffers);
        // Calculate available memory (free + cached + buffers)
        const availableMemory = memory.free + memory.cached + memory.buffers;

        // Format the data
        const systemData = {
            cpu: {
                load: cpuLoad.currentLoad,
                temperature: cpuTemp.main,
                cores: cpuLoad.cpus
            },
            memory: {
                total: memory.total,
                used: actualUsedMemory,
                free: memory.free,
                available: availableMemory,
                usedPercentage: (actualUsedMemory / memory.total) * 100,
                cached: memory.cached,
                buffers: memory.buffers,
                // Add memory breakdown for clarity
                breakdown: {
                    total: memory.total,
                    actualUsed: actualUsedMemory,
                    cached: memory.cached,
                    buffers: memory.buffers,
                    free: memory.free
                }
            },
            disk: disk.map(d => ({
                fs: d.fs,
                size: d.size,
                used: d.used,
                available: d.available,
                usedPercentage: d.use
            })),
            network: {
                interfaces: network.map(n => ({
                    iface: n.iface,
                    ip4: n.ip4,
                    ip6: n.ip6,
                    mac: n.mac
                }))
            },
            uptime: {
                uptime: time.uptime,
                current: time.current
            }
        };

        res.json(systemData);
    } catch (error) {
        console.error('Error getting system information:', error);
        throw error;
    }
};

exports.getBasicSystemData = async (req, res) => {
    try {
        const [cpuLoad, cpuTemp, memory, disk, network, time] = await Promise.all([
            si.currentLoad(),
            si.cpuTemperature(),
            si.mem(),
            si.fsSize(),
            si.networkInterfaces(),
            si.time()
        ]);

        // Calculate actual used memory (total - free - cached - buffers)
        const actualUsedMemory = memory.total - memory.free - memory.cached - memory.buffers;

        const basicSystemData = {
            cpu: {
                load: cpuLoad.currentLoad,
                temperature: cpuTemp.main
            },
            memory: {
                total: memory.total,
                used: actualUsedMemory,
                usedPercentage: (actualUsedMemory / memory.total) * 100
            },
            disk: disk.map(d => ({
                size: d.size,
                used: d.used,
                usedPercentage: d.use
            })),
            network: {
                interfaces: network.map(n => ({
                    iface: n.iface,
                    ip4: n.ip4
                }))
            },
            uptime: time.uptime
        };

        res.json(basicSystemData);
    } catch (error) {
        console.error('Error getting basic system information:', error);
        throw error;
    }
};

exports.getCPUData = async (req, res) => {
    try {
        const [cpuLoad, cpuTemp] = await Promise.all([
            si.currentLoad(),
            si.cpuTemperature(),
        ])
        const CPUData = {
            cpu: {
                load: cpuLoad.currentLoad,
                temperature: cpuTemp.main,
                cores: cpuLoad.cpus
            },
        }
        res.json(CPUData)
    } catch (err) {
        console.error('Error getting CPU information', error);
        throw error;
    }
}

exports.getServicesData = async (req, res) => {
    try {
        const services = await si.services('*')
        res.json({
            services: services.map(service => ({
                name: service.name,
                running: service.running,
                pids: service.pids.map((pid, index) => {
                    return ({
                        [index]: pid
                    }
                    )
                }),
                cpu: service.cpu,
            }))
        })
    } catch (error) {
        console.log('Error getting service information', error)
        res.status(500).json({
            message: 'Failed to get service information',
            error: error
        })
    }
}

exports.getNetworkData = async (req, res) => {
    try {
        const [networkInterfaces, networkStats] = await Promise.all([
            si.networkInterfaces(),
            si.networkStats()
        ]);

        const networkData = {
            interfaces: networkInterfaces.map(n => ({
                iface: n.iface,
                ip4: n.ip4,
                ip6: n.ip6,
                mac: n.mac,
                internal: n.internal,
                virtual: n.virtual,
                operstate: n.operstate,
                type: n.type,
                duplex: n.duplex,
                mtu: n.mtu,
                speed: n.speed
            })),
            stats: networkStats.map(s => ({
                iface: s.iface,
                rx_bytes: s.rx_bytes,
                tx_bytes: s.tx_bytes,
                rx_sec: s.rx_sec,
                tx_sec: s.tx_sec,
                ms: s.ms
            }))
        };

        res.json(networkData);
    } catch (error) {
        console.error('Error getting network information:', error);
        throw error;
    }
};

exports.getDiskData = async (req, res) => {
    try {
        const disk = await si.fsSize()
        const DiskData = {
            disk: disk.map(d => ({
                fs: d.fs,
                size: d.size,
                used: d.used,
                available: d.available,
                usedPercentage: d.use,
                mount: d.mount
            }))
        }
        res.json(DiskData)
    } catch (err) {
        console.error('Error getting Disk information', error);
        throw error;
    }
}

exports.getNetworkConnections = async (req, res) => {
    try {
        const connections = await si.networkConnections()
        res.json({
            connections: connections.map((connection) => ({
                protocol: connection.protocol,
                localAddress: connection.localAddress,
                localPort: connection.localPort,
                peerAddress: connection.peerAddress,
                peerPort: connection.peerPort,
                pid: connection.pid,
                processName: connection.process
            }))
        })
    } catch (err) {
        console.error('Error getting Network Connections', error)
        throw error;
    }
}

exports.getMemoryData = async (req, res) => {
    try {
        const memory = await si.mem()
        const memLayouts = await si.memLayout()

        const actualUsedMemory = memory.total - memory.free - memory.cached - memory.buffers;
        const MemoryData = {
            memory: {
                total: memory.total,
                used: memory.used,
                actualUsedMemory: actualUsedMemory,
                actualusedPercentage: (actualUsedMemory / memory.total) * 100,
                free: memory.free,
                available: memory.available,
                usedPercentage: (memory.used / memory.total) * 100,
                cached: memory.cached,
                buffers: memory.buffers
            },
            memoryLayout: memLayouts.map((layout) => ({
                size: layout.size,
                bank: layout.bank,
                type: layout.type,
                clockSpeed: layout.clockSpeed,
                manufacturer: layout.manufacturer,
                voltageMin: layout.voltageMin,
                voltageMax: layout.voltageMax,
                voltageConfigured: layout.voltageConfigured
            }))
        }
        res.json(MemoryData)
    } catch (err) {
        console.error('Error getting Memory information', error);
        throw error;
    }
}

exports.getBasicOsData = async (req, res) => {
    try {
        const osInfo = await (si.osInfo())
        res.json({ osInfo })
    }
    catch (error) {
        console.error('Error getting Basic OS infomation', error)
        throw error
    }
}

exports.getFansSpeed = async (req, res) => {
    try {
        const fanSpeedPath = '/sys/devices/platform/cooling_fan/hwmon/hwmon2/fan1_input';
        const fanSpeed = await fs.readFile(fanSpeedPath, 'utf8');
        const rpm = parseInt(fanSpeed, 10);
        res.json({ rpm });
    } catch (error) {
        console.error('Error getting Fans Speed', error)
        throw error
    }
}

exports.getOSVersionsData = async(req,res)=>{
    try{
        const osVersions = await (si.versions())
        res.json({osVersions})
    } catch (error){

    }
}