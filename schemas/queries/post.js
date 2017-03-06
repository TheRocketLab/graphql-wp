import { GraphQLList, GraphQLInt, GraphQLString, GraphQLEnumType } from 'graphql';
import postType from '../types/post';
import { getPosts, getPostById } from '../../requester';
import { postDataLoader } from '../../dataLoader';

export const postQuery = {
  type: postType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (_, { id }) => postDataLoader.load(id),
};

export const postsQuery = {
  type: new GraphQLList(postType),
  args: {
    search: { type: GraphQLString },
    order: {
      type: new GraphQLEnumType({
        name: 'Order',
        values: {
          ASC: { value: 'asc' },
          DESC: { value: 'desc' },
        },
      }),
    },
    orderby: {
      type: new GraphQLEnumType({
        name: 'OrderBy',
        values: {
          DATE: { value: 'date' },
          RELEVANCE: { value: 'relevance' },
          ID: { value: 'id' },
          INCLUDE: { value: 'include' },
          TITLE: { value: 'title' },
          SLUG: { value: 'slug' },
        },
      }),
    },
  },
  resolve: (_, { search, order, orderBy }) => getPosts({ search, order, orderBy }),
};
