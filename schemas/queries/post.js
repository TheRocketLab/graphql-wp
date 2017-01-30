import { GraphQLList, GraphQLInt } from 'graphql';
import postType from '../types/post';
import { getPosts, getPostById } from '../../requester';

export const postQuery = {
  type: postType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: (_, { id }) => getPostById(id),
};

export const postsQuery = {
  type: new GraphQLList(postType),
  resolve: () => getPosts()
};
