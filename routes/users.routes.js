import express from 'express'
import UsersController from '../controllers/users.controller.js'

const router = express.Router()
router.get('/', UsersController.getUsers)
router.post('/', UsersController.createUser)

export default router
