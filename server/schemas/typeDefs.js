const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    category: String
    experience: String
    optional: String
    phone: String
  }

  type Query {
    users: [User]
    user: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      category: String!
      experience: String!
      optional: String!
      phone: String
    ): User

    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
      category: String
      experience: String
      optional: String
      phone: String
    ): User
  }
`;

module.exports = typeDefs;
