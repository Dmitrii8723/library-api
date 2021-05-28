const { db } = require('../pg');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString, GraphQLBoolean} = require("graphql");
const { ProjectsType, ResourcesType, AllResourcesType } = require('./types');

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: {
    allResources: {
      type: new GraphQLList(AllResourcesType),
      resolve(parentValue, args) {
        const query = `SELECT * FROM resources`;
        return db
          .many(query)
          .then(res => res)
          .catch(err => err);
      }
    },
      resources: {
        type: new GraphQLList(ResourcesType),
        args: { type: { type: GraphQLString }, video: { type: GraphQLBoolean }},
        resolve(parentValue, args) {
          // TODO: Find a way how to pass mulitple parameters
          const query = `SELECT * FROM resources WHERE type=$1`;
          const values = [args.type];
          return db
            .many(query, values)
            .then(res => {
            return res.filter((item) => { 
              if(item.video === args.video) return item;
            }); 
        })
            .catch(err => err);
        }
      }
  }
});

exports.query = RootQuery;
