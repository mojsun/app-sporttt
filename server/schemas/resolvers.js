const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // Return all users
    users: async () => {
      return await User.find();
    },
  },

  Mutation: {
    // Add a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },

    // Update user data
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
