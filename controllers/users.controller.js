import { AuthError } from '@supabase/supabase-js'
import UsersService from '../services/users.service.js'
import {
  ResponseEnum, Oke, Failed,
} from '../utilities/response.js'

const UsersController = {

  getUsers: async (req, res) => {
    try {
      const users = await UsersService.getUsers()
      return res.status(ResponseEnum.SUCCESS).send(Oke('Get all users', users))
    } catch (error) {
      if (error instanceof AuthError) {
        return res.status(ResponseEnum.BAD_REQUEST).send(Failed(error.message))
      }
      return res.status(ResponseEnum.INTERNAL_SERVER_ERROR).send(Failed(error.message))
    }
  },

  getUserById: async (req, res) => {
    try {
      const { id } = req.params
      const user = await UsersService.getUserById({ id })
      return res.status(ResponseEnum.SUCCESS).send(Oke('Get all users', user))
    } catch (error) {
      if (error instanceof AuthError) {
        return res.status(ResponseEnum.BAD_REQUEST).send(Failed(error.message))
      }
      return res.status(ResponseEnum.INTERNAL_SERVER_ERROR).send(Failed(error.message))
    }
  },

  createUser: async (req, res) => {
    try {
      const { name, email, password } = req.body
      const user = await UsersService.createUser({ email, password, name })
      return res.status(ResponseEnum.SUCCESS).send(Oke('Create user', user))
    } catch (error) {
      if (error instanceof AuthError) {
        return res.status(ResponseEnum.BAD_REQUEST).send(Failed(error.message))
      }
      return res.status(ResponseEnum.INTERNAL_SERVER_ERROR).send(Failed(error.message))
    }
  },

  updateUser: async (req, res) => {
    try {
      const { name, email } = req.body
      const { id } = req.params
      const user = await UsersService.updateUser({ name, email, id })
      return res.status(ResponseEnum.SUCCESS).send(Oke('Update user', user))
    } catch (error) {
      if (error instanceof AuthError) {
        return res.status(ResponseEnum.BAD_REQUEST).send(Failed(error.message))
      }
      return res.status(ResponseEnum.INTERNAL_SERVER_ERROR).send(Failed(error.message))
    }
  },

  dropUser: async (req, res) => {
    try {
      const { id } = req.params
      const user = await UsersService.deleteUser({ id })
      return res.status(ResponseEnum.SUCCESS).send(Oke('Delete user', user))
    } catch (error) {
      if (error instanceof AuthError) {
        return res.status(ResponseEnum.BAD_REQUEST).send(Failed(error.message))
      }
      return res.status(ResponseEnum.INTERNAL_SERVER_ERROR).send(Failed(error.message))
    }
  },
}

export default UsersController
