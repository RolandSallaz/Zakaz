import { NextFunction, Router, Response } from 'express'
import { addPost, deletePost, getPosts } from '../controllers/posts'
import NotFoundError from '../errors/NotFoundError'
import { signIn } from '../controllers/signinAdmin'
import auth from '../middlewares/auth'

const router = Router()

router.get('/posts', getPosts)
router.use('/admin/signin', signIn)
router.use(auth)
router.post('/posts', addPost)
router.delete('/posts/:id', deletePost)
router.get('/admin/checkToken', (_, res: Response) => res.send({ message: 'Токен валиден' }))
router.use((_, __, next: NextFunction) => next(new NotFoundError()))

export default router
