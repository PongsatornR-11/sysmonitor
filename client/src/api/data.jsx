import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getSystemData = async() =>{
    return await axios.get(`${API_BASE_URL}/sys_data`)
}

export const getSystemBasicData = async() =>{
    return await axios.get(`${API_BASE_URL}/sys_basic_data`)
}

export const getCpuData = async() =>{
    return await axios.get(`${API_BASE_URL}/CPU_data`)
}


export const getNetworkData = async() =>{
    return await axios.get(`${API_BASE_URL}/network_data`)
}
export const getDiskData = async() =>{
    return await axios.get(`${API_BASE_URL}/disk_data`)
}

export const getConnectionData = async() => {
    return await axios.get(`${API_BASE_URL}/connect_data`)
}

export const getMemoryData = async() => {
    return await axios.get(`${API_BASE_URL}/mem_data`)
}

export const getServicesData = async() =>{
    return await axios.get(`${API_BASE_URL}/service_data`)
}