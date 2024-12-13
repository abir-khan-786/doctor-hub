import { Request, Response } from 'express'
import {
  createAppointmentFormDB,
  getAppointmentFormDB,
  getAppointmentWithEmailFromDB,
} from './appointment.service'

export const getAppointment = async (req: Request, res: Response) => {
  const data = await getAppointmentFormDB()
  res.status(200).json({
    status: 'Appointment fetched successfully',
    data: data,
  })
}

export const getAppointmentWithEamil = async (req: Request, res: Response) => {
  const { email } = req.params
  const data = await getAppointmentWithEmailFromDB(email)
  res.status(200).json({
    status: 'Single appointment fetched successfully',
    data: data,
  })
}

export const createAppointment = async (req: Request, res: Response) => {
  const data = req.body
  const appointment = await createAppointmentFormDB(data)
  res.status(201).json({
    status: 'Appointment created successfully',
    data: appointment,
  })
}
