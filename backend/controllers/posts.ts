import { NextFunction, Response, Request } from 'express'
import Post from '../models/post'
import ValidationError from '../errors/ValidationError'
import { UploadedFile } from 'express-fileupload'
import { uid } from 'uid'
import * as fs from 'fs'

export function getPosts(req: Request, res: Response, next: NextFunction) {
  Post.find({})
    .then((posts) => {
      res.send(posts)
    })
    .catch(next)
}

export function deletePost(req: Request, res: Response, next: NextFunction) {
  Post.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send({ message: 'Пост удален' })
    })
    .catch(next)
}

export function addPost(req: Request, res: Response, next: NextFunction) {
  const { heading, description } = req.body
  const image = req.files?.image as UploadedFile
  const imageLink = `images/${String(uid())}${Date.now()}.${image.mimetype.replace('image/', '')}`
  fs.writeFile(imageLink, image.data, (err) => {
    if (err) {
      return next(err)
    } else {
      Post.create({ image: imageLink, heading, description })
        .then((post) => res.status(201).send(post))
        .catch((err) => {
          if (err.name === 'ValidationError') {
            return next(new ValidationError())
          } else {
            next(err)
          }
        })
    }
  })
}
