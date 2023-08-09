import { NextFunction, Router ,Response} from 'express'
import { addPost, getPosts } from '../controllers/posts'
import NotFoundError from '../errors/NotFoundError'
import { signIn } from '../controllers/signinAdmin'
import auth from '../middlewares/auth'

const router = Router()

router.get('/posts', getPosts)
router.use('/admin/signin', signIn)
router.post('/posts', auth, addPost)
router.get('/admin/checkToken',auth, (_,res:Response)=> res.send({message:'Токен валиден'}))
router.use((_, __, next: NextFunction) => next(new NotFoundError()))

export default router
