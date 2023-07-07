import fastify from 'fastify'

import cookie from '@fastify/cookie'
import { transactionsRoute } from './routes/transactions'

export const app = fastify()

app.addHook('preHandler', async (request) => {
  console.log(`[${request.method}] ${request.url}`)
})

app.register(cookie)
app.register(transactionsRoute, {
  prefix: 'transactions',
})
