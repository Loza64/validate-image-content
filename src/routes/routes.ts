import { Router } from 'express'
import { checkImage } from '../controller/controller'
import { uploadFile } from '../libraries/multer'

const router = Router()

router.post('/upload/image', uploadFile, checkImage)


export default router