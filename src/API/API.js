import axios from "axios"

// const baseUrl = "https://huldev.aivolved.in/api"
const baseUrl = "http://127.0.0.1:8000/api"


const apiCall = axios.create({
    baseURL: baseUrl
})

export { apiCall }