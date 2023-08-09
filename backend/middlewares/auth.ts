import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import AuthorizationError from '../errors/AuthorizationError';
import { ADMIN_PAS } from '../utils/config';

export default (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt;
    let payload;
    try {
      payload = jwt.verify(token, ADMIN_PAS);
    } catch (e) {
      next(new AuthorizationError());
    }
    next();
  };