import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker'

interface IUserModel {
  name: string
  email: string
  created_at: string
}

export function makeMirageServer() {
  createServer({
    models: {
      user: Model.extend<Partial<IUserModel>>({})
    },

    factories: {
      user: Factory.extend({
        name() {
          return `${faker.name.firstName()} ${faker.name.lastName()}`
        },

        email() {
          return faker.internet.email().toLocaleLowerCase()
        },

        createdAt() {
          return faker.date.recent(10)
        }
      })
    },

    seeds(server) {
      server.createList('user', 10)
    },

    routes() {
      // API access route
      this.namespace = 'api'
      // API delay time
      this.timing = 1000

      // Model routes
      this.get('/users')
      this.post('/users')

      // Cleaning the namespace to not override the NEXTJS API ROUTES
      this.namespace = ''
      // Pass through NEXTJS API ROUTES when the request does not match a result here
      this.passthrough()
    }
  })
}
