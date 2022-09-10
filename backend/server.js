const userRoutes = require('./routes/userRoutes')

const express = require('express')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 5000



const app = express()

app.get('/api/users', (req, res) => {
  res.status(200).json({ message: 'Welcome to the support Desk API'})
})

app.use('/api/users', userRoutes)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))