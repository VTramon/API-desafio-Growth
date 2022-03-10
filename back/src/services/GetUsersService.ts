import axios from 'axios'

type user = {
  id: number
  company: {
    name: string
  }
}
class GetUserService {
  async execute() {
    try {
      const response: user[] = (
        await axios.get('http://jsonplaceholder.typicode.com/users')
      ).data

      const users = []

      response.map((item) => {
        const job = item.company.name
        const group = /Group/
        if (group.test(job)) {
          users.push(item.id)
        }
      })

      return users
    } catch (error) {
      throw new Error(error)
    }
  }
}

export { GetUserService }
