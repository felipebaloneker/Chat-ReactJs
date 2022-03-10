const express = require('express');
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 3001
const Base = process.env.REACT_APP_BASE_URL

app.use(cors)
app.use(express.static('build'));
app.listen(PORT, () => console.log(`Listening App!! Port: ${PORT} Base: ${Base}`));