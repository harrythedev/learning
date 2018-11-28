const { GraphQLServer } = require('graphql-yoga')

let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL',
}]
let idCount = links.length

// implementation of schema: typeDefs: Query.info
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },
  Mutation: {
    postLink: (root, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    },
    updateLink: (root, args) => {
      const { id, description, url } = args
      const link = {
        id: `link-${args.id}`,
        description: description? description : links[id].description,
        url: url? url : links[id].url,
      }
      links.splice(id, 1)
      return link
    },
    deleteLink: (root, args) => {
      return links.splice(args.id, 1)
    }
  },
}

// bundled and passed to GraphQLServer.
// tells server what API operations are accepted and how they should be resolved.
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

// visit http://localhost:4000 to use Playground
server.start(() => console.log(`Server is runing on http://localhost:4000`))
