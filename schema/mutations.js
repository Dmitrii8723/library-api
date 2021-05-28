
const graphql = require("graphql");
const db = require('../pg').db;
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } = graphql;
const { AddResourceType } = require('./types');

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  type: "Mutation",
  fields: {
    // addProject: {
    //   type: ProjectType,
    //   args: {
    //     creatorId: { type: GraphQLID },
    //     title: { type: GraphQLString },
    //     description: { type: GraphQLString }
    //   },
    //   resolve(parentValue, args) {
    //     const query = `INSERT INTO project(creator_id, created, title, description) VALUES ($1, $2, $3, $4) RETURNING title`;
    //     const values = [
    //       args.creatorId,
    //       new Date(),
    //       args.title,
    //       args.description
    //     ];

    //     return db
    //       .one(query, values)
    //       .then(res => res)
    //       .catch(err => err);
    //   }
    // },
    addResource: {
      type: AddResourceType,
      args: {
        name: { type: GraphQLString },
        resource_url: { type: GraphQLString },
        cover_url: { type: GraphQLString },
        video: {type: GraphQLBoolean },
        type: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        const query = `INSERT INTO resources(name, resource_url, cover_url, video, type, created_at) 
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
        const values = [
          args.name,
          args.resource_url,
          args.cover_url,
          args.video,
          args.type,
          new Date(),
        ];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.mutation = RootMutation;