import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export default new GraphQLObjectType({
  name: 'Tag',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    link: { type: GraphQLString },
    count: { type: GraphQLString, resolve(test) {console.log(test)} },
  },
});
