import {Router} from "express";
import {getPosts} from "../controllers/posts";

const router = Router()

router.get('/posts', getPosts)
router.post('/posts')

export default router
