import e, { Request, Response } from 'express'
import {
  createUserFromDB,
  getUserFromDB,
  makeAdminFromDB,
  singleUserFromDB,
  userProfileFromDB,
} from './user.service'

export const getUser = async (req: Request, res: Response) => {
  const data = await getUserFromDB()
  res.status(200).json({
    status: 'user fetched successfully',
    data: data,
  })
}

export const singleUser = async (req: Request, res: Response) => {
  const { id } = req.params
  const data = await singleUserFromDB(id)
  res.status(200).json({
    status: 'find single user successfully',
    data: data,
  })
}

export const createUser = async (req: Request, res: Response) => {
  const data = req.body
  const user = await createUserFromDB(data)
  res.status(201).json({
    status: 'user create successfully',
    data: user,
  })
}
// user profile
export const userProfile = async (req: Request, res: Response) => {
  const email = req.params

  const user = await userProfileFromDB(email)
  res.status(200).json({
    status: 'User profile fetched successfully',
    data: user,
  })
}
// make admin

export const makeAdmin = async (req: Request, res: Response) => {
  const data = req.body
  const user = await makeAdminFromDB(data)
  res.status(201).json({
    status: 'Make Adnin successfully',
    data: user,
  })
}
