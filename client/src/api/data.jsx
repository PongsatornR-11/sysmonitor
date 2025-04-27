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