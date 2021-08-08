const express = require('express');
const app = express();
const expressGraphQL = require('express-graphql').graphqlHTTP;
const { query } = require('./schema/queries');
const { mutation } = require('./schema/mutations');
const cors = require('cors')
const handler = async () => {
const { 
    GraphQLSchema,
 } = require('graphql');

 const schema = new GraphQLSchema({
    query,
    mutation,
  });
  
  app.use(cors());
app.use('/graphql', expressGraphQL({
      schema: schema, 
      graphiql: true,
   }));

app.listen(5000, () => console.log('Server Running'));
};

export default handler;