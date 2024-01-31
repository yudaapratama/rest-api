/* eslint-disable no-async-promise-executor */
import db from '../config/db.js'

const UsersService = {

  getUsers: () => new Promise(async (resolve, reject) => {
    const { data: { users }, error } = await db.auth.admin.listUsers()
    if (error) reject(error)
    resolve(users)
  }),

  createUser: (request) => new Promise(async (resolve, reject) => {
    const { data: { user }, error } = await db.auth.admin.createUser({
      email: request.email,
      password: request.password,
      email_confirm: true,
      user_metadata: {
        name: request.name,
      },
    })
    if (error) reject(error)
    resolve(user)
  }),

  updateUser: (request) => new Promise(async (resolve, reject) => {
    const { data: user, error } = await db.auth.admin.updateUserById(request.id, {
      email: request.email,
    })
    if (error) reject(error)
    resolve(user)
  }),

  updatePassword: (request) => new Promise(async (resolve, reject) => {
    const { data: user, error } = await db.auth.admin.updateUserById(request.id, {
      password: request.password,
    })
    if (error) reject(error)
    resolve(user)
  }),

  deleteeUser: (request) => new Promise(async (resolve, reject) => {
    const { data: user, error } = await db.auth.admin.deleteUser(request.id)
    if (error) reject(error)
    resolve(user)
  }),
}

export default UsersService
