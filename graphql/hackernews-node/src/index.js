const { GraphQLServer } = require('graphql-yoga')
// import { GraphQLServer } from 'graphql-yoga'

// defines GraphQL schema: Query{ info: String! }
const typeDefs = `
type Query {
  info: String!
}
`

// implementation of schema: typeDefs: Query.info
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
  }
}

// bundled and passed to GraphQLServer.
// tells server what API operations are accepted and how they should be resolved.
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

// visit http://localhost:4000 to use Playground
server.start(() => console.log(`Server is runing on http://localhost:4000`))
