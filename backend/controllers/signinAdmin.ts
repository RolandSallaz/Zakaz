import { NextFunction, Request, Response } from 'express'
import AuthorizationError from '../errors/AuthorizationError'
import jwt from 'jsonwebtoken'
import { ADMIN_PAS } from '../utils/config'

export function signIn(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body
  if (password.toString() === ADMIN_PAS) {
    const token = jwt.sign(password, password)
    res.send({ token })
  } else {
    return next(new AuthorizationError('Неправильный пароль'))
  }
}
