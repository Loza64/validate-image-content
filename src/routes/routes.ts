import { Router } from 'express'
import { checkImageContent } from '../controller/controller'
import { uploadFile } from '../libraries/multer'
import { imageValidation } from '../validators/image'
import { validate } from '../middlewares/validator'

const router = Router()

router.post('/upload/image', uploadFile, imageValidation, validate, checkImageContent)


export default router