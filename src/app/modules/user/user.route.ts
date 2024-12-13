import express from 'express'
import {
  createUser,
  getUser,
  makeAdmin,
  singleUser,
  userProfile,
} from './user.controller'

const router = express.Router()

router.get('/', getUser)
router.post('/create-user', createUser)
router.get('/profile/:email', userProfile)
router.get('/:id', singleUser)
router.patch('/make-admin/:email', makeAdmin)

export default router
