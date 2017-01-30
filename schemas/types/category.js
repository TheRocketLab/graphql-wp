import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export default new GraphQLObjectType({
  name: 'Category',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    taxonomy: { type: GraphQLString },
    count: { type: GraphQLInt },
    description: { type: GraphQLString },
    link: { type: GraphQLString },
    parent: { type: GraphQLInt },
  },
});
