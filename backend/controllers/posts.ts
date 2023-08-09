import { NextFunction, Response, Request } from 'express'
import Post from '../models/post'
import ValidationError from '../errors/ValidationError'

export function getPosts(req: Request, res: Response, next: NextFunction) {
  Post.find({})
    .then((posts) => {
      res.send(posts)
    })
    .catch(next)
}

export function addPost(req: Request, res: Response, next: NextFunction) {
  const { image, heading, description } = req.body
  Post.create({ image, heading, description })
    .then((post) => res.status(201).send(post))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new ValidationError())
      } else {
        next(err)
      }
    })
}
