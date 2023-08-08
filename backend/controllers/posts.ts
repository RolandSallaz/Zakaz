import { NextFunction, Response, Request } from 'express'

export function getPosts(req: Request, res: Response, next: NextFunction) {
  res.send({ message: 'true' })
}

export function addPost(req: Request, res: Response, next: NextFunction) {
 
}
