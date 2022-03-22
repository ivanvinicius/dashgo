import { createServer, Factory, Model, Response } from 'miragejs'
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
      server.createList('user', 200)
    },

    routes() {
      // API access route
      this.namespace = 'api'
      // API delay time
      this.timing = 1000

      // Model routes
      this.get('/users', function (schema, request) {
        const { page = 1, perPage = 10 } = request.queryParams

        const total = schema.all('user').length

        const pageStart = (Number(page) - 1) * Number(perPage)
        const pageEnd = pageStart + Number(perPage)

        const users = this.serialize(schema.all('user')).users.slice(
          pageStart,
          pageEnd
        )

        return new Response(200, { 'x-total-count': String(total) }, { users })
      })
      this.post('/users')

      // Cleaning the namespace to not override the NEXTJS API ROUTES
      this.namespace = ''
      // Pass through NEXTJS API ROUTES when the request does not match a result here
      this.passthrough()
    }
  })
}
