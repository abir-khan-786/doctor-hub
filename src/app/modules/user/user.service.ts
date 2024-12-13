import { IUser } from './user.interface'
import { User } from './user.model'

export const getUserFromDB = async (): Promise<IUser[] | []> => {
  // This function will be implemented later
  const users = await User.find()
  return users
}

export const singleUserFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload })
  return user
}

export const createUserFromDB = async (payload): Promise<IUser | null> => {
  // This function will be implemented later
  const user = await new User(payload)
  return user.save()
}

// user profile
export const userProfileFromDB = async (payload): Promise<IUser | null> => {
  const user = await User.findOne({
    email: payload.email,
  })
  return user
}

// make admin

export const makeAdminFromDB = async (payload) => {
  const user = await User.updateOne({ email: payload.email }, { role: 'admin' })
  return user
}
