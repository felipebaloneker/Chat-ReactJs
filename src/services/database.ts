import axios from 'axios';

const database = axios.create({
    baseURL:process.env.React_APP_BASE_URL,
})

export default database;