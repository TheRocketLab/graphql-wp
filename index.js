import express from 'express';
import graphqlHTTP from 'express-graphql';
import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt } from 'graphql';

import { postQuery, postsQuery } from './schemas/queries/post';

// Define the Query type
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    post: postQuery,
    posts: postsQuery,
  }
});


const schema = new GraphQLSchema({ query: queryType });


const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  // rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
