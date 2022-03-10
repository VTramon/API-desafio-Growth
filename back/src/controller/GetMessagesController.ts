import { Request, Response } from 'express'
import { GetUserMessagesService } from '../services/GetUserMessegeService'
import { GetUserService } from '../services/GetUsersService'

class GetMessagesController {
  async handle(req: Request, res: Response) {
    try {
      const userService = new GetUserService()
      const messageService = new GetUserMessagesService()

      const users = await userService.execute()
      const result = await messageService.execute(users)

      return res.json(result)
    } catch (error) {
      throw new Error(error)
    }
  }
}

export { GetMessagesController }
