export interface IUser {
  id: string
  name: string
  email: string
  role: 'user' | 'admin'
  password: string
  phone: string
  image: string
  occupation: string
}
