const si = require('systeminformation');

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
            },}
        res.json(CPUData)
    } catch (err) {
        console.error('Error getting CPU information', error);
        throw error;
    }
}