import { NextFunction, Request, Response } from 'express'
import AuthorizationError from '../errors/AuthorizationError'
import jwt from 'jsonwebtoken'
import { ADMIN_PAS } from '../utils/config'

export function signIn(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body
  if (password.toString() === ADMIN_PAS) {
    const token = jwt.sign(password, password)
    res
      .cookie('jwt', token, {
        maxAge: 3600 * 1000, // one week
        httpOnly: true,
        sameSite: 'none', // true
      })
      .send({ message: 'Авторизация прошла успешно' })
  } else {
    return next(new AuthorizationError('Неправильный пароль'))
  }
}
