const { db } = require('../pg');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString, GraphQLBoolean} = require("graphql");
const { ProjectsType, ResourcesType, AllResourcesType } = require('./types');

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: {
      // resources: {
      //   type: new GraphQLList(ResourcesType),
      //   args: { type: { type: GraphQLID }, video: { type: GraphQLBoolean }},
      //   resolve(parentValue, args) {
      //     const query = `SELECT * FROM resources WHERE type=$1 AND video=$2`;

      //     console.log('args', args)
      //     const values = [args];
      //     return db
      //       .many(query, values)
      //       .then(res => res)
      //       .catch(err => err);
      //   }
      // },
      allResources: {
        type: new GraphQLList(AllResourcesType),
        resolve(parentValue, args) {
          const query = `SELECT * FROM resources`;
          return db
            .many(query)
            .then(res => res)
            .catch(err => err);
        }
      }
  }
});

exports.query = RootQuery;
