const userRoutes = require('./routes/userRoutes')
const { errorHandler } = require('./middlewares/errorMiddleware')

const express = require('express')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 5000



const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.get('/api/users', (req, res) => {
  res.status(200).json({ message: 'Welcome to the support Desk API'})
})

// Routes
app.use('/api/users', userRoutes)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))