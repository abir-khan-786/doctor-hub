// const express = require('express')
import express from 'express'
import cors from 'cors'

import useRouter from './app/modules/user/user.route'
import appointmentRouter from './app/modules/appointment/appointment.router'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/user', useRouter)
app.use('/api/v1/appointment', appointmentRouter)

export default app
