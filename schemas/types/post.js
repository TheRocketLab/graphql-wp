import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql';
import categoryType from './category';
import tagType from './tag';
import mediaType from './media';
import authorType from './author';
// import meta as metaType from './meta';
import { getCategoryById, getTagById, getMetaById, getMediaById } from '../../requester';

// Define the post type
export default new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString, resolve: (post) => post.title.rendered },
    guid: { type: GraphQLString, resolve: (post) => post.guid.rendered },
    date: { type: GraphQLString },
    date_gmt: { type: GraphQLString },
    modified: { type: GraphQLString },
    modified_gmt: { type: GraphQLString },
    slug: { type: GraphQLString },
    type: { type: GraphQLString },
    link: { type: GraphQLString },
    template: { type: GraphQLString },
    comment_status: { type: GraphQLString },
    ping_status: { type: GraphQLString },
    sticky: { type: GraphQLBoolean },
    format: { type: GraphQLString },
    content: { type: GraphQLString, resolve: (post) => post.content.rendered },
    stripped_content: { type: GraphQLString, resolve: (post) => post.content.rendered.replace(/<(?:.|\n)*?>/gm, '') },
    content_protected: { type: GraphQLString, resolve: (post) => post.content.protected },
    excerpt: { type: GraphQLString, resolve: (post) => post.excerpt.rendered },
    stripped_excerpt: { type: GraphQLString, resolve: (post) => post.excerpt.rendered.replace(/<(?:.|\n)*?>/gm, '') },
    excerpt_protected: { type: GraphQLString, resolve: (post) => post.excerpt.protected },
    featured_media: { type: mediaType, resolve: (post) => getMediaById(post.featured_media) },
    categories: {
      type: new GraphQLList(categoryType),
      resolve: (post) => post.categories.map(getCategoryById),
    },
    tags: {
      type: new GraphQLList(tagType),
      resolve: (post) => post.tags.map(getTagById),
    },
    author: { type: GraphQLInt }
  }
});
