import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import AuthorizationError from '../errors/AuthorizationError'
import { ADMIN_PAS } from '../utils/config'

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers
  if (!authorization) {
    return next(new AuthorizationError())
  }
  const token = authorization.replace('Bearer ', '')
  let payload
  try {
    payload = jwt.verify(token, ADMIN_PAS)
  } catch (e) {
    next(new AuthorizationError())
  }
  next()
}
