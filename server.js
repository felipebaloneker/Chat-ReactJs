const express = require('express');
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 3001
const Base = process.env.REACT_APP_BASE_URL

app.use(express.static('build'));
app.listen(PORT, () => console.log(`Listening App!! Port: ${PORT} Base: ${Base}`));