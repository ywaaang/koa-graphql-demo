const { gql } = require('apollo-server-koa')
const Service = require('../service/index')

const typeDefs = gql`
  directive @upper on FIELD_DEFINITION
  directive @auth on FIELD_DEFINITION

  type User {
    name: String
    id: Int!
    sex: String
    height: String
    weight: String
    age: String
  }

  type Query {
    getUser: User @auth,
    hello: String @upper
  }

  type Mutation {
    register(name: String, sex: String, height: Int, weight: Int, age: Int): User,
    login(id: String): User,
    logout(id: String): String,
  }
`

const resolvers = {
  Query: {
    getUser: (parent, args, context, info) => {
      const { userId } = context.session;
      return Service.findUserById(userId)
    },
    hello: () => 'Hello World'
  },
  Mutation: {
    register: async (parent, args, context) => {
      const { name, sex, height, weight, age } = args
      return Service.createUser({name, sex, height, weight, age})
    },
    login: async (obj, args, context) => {
      const { id } = args;
      const user = await Service.findUserById(id);
      context.session.update(user);
      return user
    },
    logout: async (obj, args, context) => {
      context.session.delete();
      return 'success'
    },
  }
}

module.exports = {
  resolvers,
  typeDefs
}