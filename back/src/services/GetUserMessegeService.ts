import axios from 'axios'

type message = {
  userId: number
  id: number
  title: string
  body: string
}

class GetUserMessagesService {
  async execute(ids: number[]) {
    try {
      const response: message[] = (
        await axios.get('http://jsonplaceholder.typicode.com/posts')
      ).data

      const messages = []
      response.map((item) => {
        if (item.userId === ids[0] || item.userId === ids[1]) {
          messages.push(item)
        }
      })

      return messages
    } catch (error) {
      throw new Error(error)
    }
  }
}

export { GetUserMessagesService }
