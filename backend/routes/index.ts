import { Router } from 'express'
import { getPosts } from '../controllers/posts'
import posts from "./posts";

const router = Router()

router.use(posts)

export default router
