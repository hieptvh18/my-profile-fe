import axios from "axios";

const Instance = axios.create({
    // baseURL: 'http://localhost:3001'
    baseURL: 'http://localhost:5000/api'
})
export default Instance