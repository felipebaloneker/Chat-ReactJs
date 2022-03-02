import axios from 'axios';

const database = axios.create({
    baseURL:process.env.DATABASE_URL,
})

export default database;