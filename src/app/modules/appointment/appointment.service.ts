import { IAppointment } from './appointment.interface'
import { Appointment } from './appointment.model'

export const getAppointmentFormDB = async (): Promise<IAppointment[]> => {
  return Appointment.find()
}

// find single appointmnet with email
export const getAppointmentWithEmailFromDB = async (
  payload: string
): Promise<IAppointment | null> => {
  return Appointment.findOne({
    email: payload,
  })
}

export const createAppointmentFormDB = async (
  appointment: IAppointment
): Promise<IAppointment | null> => {
  const data = await new Appointment(appointment)
  return data.save()
}
