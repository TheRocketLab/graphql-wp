import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export default new GraphQLObjectType({
  name: 'Media',
  fields: {
    id: { type: GraphQLString },
    date: { type: GraphQLString },
    date_gmt: { type: GraphQLString },
    guid: { type: GraphQLString, resolve: (media) => media.guid.rendered },
    modified: { type: GraphQLString },
    modified_gmt: { type: GraphQLString },
    slug: { type: GraphQLString },
    type: { type: GraphQLString },
    link: { type: GraphQLString },
    title: { type: GraphQLString, resolve: (media) => media.title.rendered },
    description: { type: GraphQLString, resolve: (media) => media.description.rendered },
    caption: { type: GraphQLString, resolve: (media) => media.caption.rendered },
    alt_text: { type: GraphQLString },
    media_type: { type: GraphQLString },
    mime_type: { type: GraphQLString },
    source_url: { type: GraphQLString },
  }
});
