import axios from 'axios';
const database = axios.create({
    baseURL:"https://chat-reactjs-database.herokuapp.com/",
})

export default database;