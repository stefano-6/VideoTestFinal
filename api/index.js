const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');


dotenv.config()
const app = express()

const port = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());

// Api routes
app.use('/users', require('./routes/users.route'))
app.use('/videos', require('./routes/videos.route'))

app.listen(port, () => console.log(`App listenin on posrt ${port}`))