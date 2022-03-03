import axios from 'axios';
const database = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
})

export default database;