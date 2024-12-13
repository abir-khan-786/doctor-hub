import mongoose from 'mongoose'
import app from './app'

const port = 5000

async function startServer() {
  try {
    await mongoose.connect('mongodb://localhost:27017/doctor-hub')
    console.log('Connected to database')

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (err) {
    console.log(err)
  }
}

startServer()
