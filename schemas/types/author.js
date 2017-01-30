import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export default new GraphQLObjectType({
  name: 'Author',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  },
});
