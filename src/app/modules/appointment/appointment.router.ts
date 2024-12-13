import express from 'express'
import {
  createAppointment,
  getAppointment,
  getAppointmentWithEamil,
} from './appointment.controller'

const router = express.Router()

router.get('/', getAppointment)
router.post('/create-appointment', createAppointment)
router.get('/:email', getAppointmentWithEamil)

export default router
