import { Router } from 'express'
import { GetMessagesController } from './controller/GetMessagesController'

const router = Router()

router.get('/getUsersMessages', new GetMessagesController().handle)

export default router
