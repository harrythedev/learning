import { Author, Post, View, FortuneCookie } from './connectors'

const resolvers = {
  Query: {
    author:               (_, args) => Author.find({ where: args }),
    allAuthors:           (_, args) => Author.findAll(),
    allPosts:             ()        => Post.findAll(),
    getForFortuneCookies: ()        => FortuneCookie.getOne(),
  },
  Author: {
    posts: (author) => author.getPosts(),
  },
  Post: {
    author: (post) => post.getAuthor(),
    views:  (post) => View.findOne({ postId: post.id }).then(view => view.views),
  },
}

export default resolvers