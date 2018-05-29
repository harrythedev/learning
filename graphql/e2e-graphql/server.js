import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import compression from 'compression'
import dotenv from 'dotenv'
import { ApolloEngine } from 'apollo-engine'

import schema from './data/schema'

dotenv.config()
const { GRAPHQL_PORT, ENGINE_API_KEY } = process.env // find key from https://engine.apollographql.com

const app = express()

app.use(compression()) // gzip compression for HTTP response
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
    tracing: true,
    cacheControl: true,
  })
)
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

const engine = new ApolloEngine({
  apiKey: ENGINE_API_KEY,
  stores: [
    {
      name: 'inMemEmbeddedCache',
      inMemory: {
        cacheSize: 104857600, // 100 MB; defaults to 50MB.
      },
    },
  ],
  queryCache: {
    publicFullQueryStore: 'inMemEmbeddedCache',
  },
})

engine.listen({
  port: GRAPHQL_PORT,
  expressApp: app,
})
