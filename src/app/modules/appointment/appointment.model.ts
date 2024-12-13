import { model, Schema } from 'mongoose'
import { IAppointment } from './appointment.interface'

const appointmentModel = new Schema<IAppointment>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  appointmentName: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    required: true,
  },
  appointmentTime: {
    type: String,
    required: true,
  },
  appointmentStatus: {
    type: String,
    required: true,
  },
})

export const Appointment = model<IAppointment>('Appointment', appointmentModel)
