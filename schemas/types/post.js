import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt } from 'graphql';
import categoryType from './category';
import tagType from './tag';
// import meta as metaType from './meta';
import { getCategoryById, getTagById, getMetaById } from '../../requester';

// Define the post type
export default new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: { type: GraphQLInt },
    date: { type: GraphQLString },
    date_gmt: { type: GraphQLString },
    modified: { type: GraphQLString },
    modified_gmt: { type: GraphQLString },
    slug: { type: GraphQLString },
    type: { type: GraphQLString },
    link: { type: GraphQLString },
    comment_status: { type: GraphQLString },
    format: { type: GraphQLString },

    // metas: {
    //   type: new GraphQLList(metaType),
    //   resolve: (post) => post.meta.map(getMetaById),
    // },
    categories: {
      type: new GraphQLList(categoryType),
      resolve: (post) => post.categories.map(getCategoryById),
    },
    tags: {
      type: new GraphQLList(tagType),
      resolve: (post) => post.tags.map(getTagById),
    },
    author: {
      type: new GraphQLList(authorType),
      resolve: (post) => getUserById(post.author),
    }
  }
});
