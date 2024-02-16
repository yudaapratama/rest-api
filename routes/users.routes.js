import express from 'express'
import UsersController from '../controllers/users.controller.js'

const router = express.Router()
router.get('/', UsersController.getUsers)
router.get('/:id', UsersController.getUserById)
router.post('/', UsersController.createUser)
router.patch('/:id', UsersController.updateUser)
router.delete('/:id', UsersController.dropUser)

export default router
