const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = graphql;

  const ResourcesType = new GraphQLObjectType({
    name: "Resources",
    type: "Query",
    fields: {
      id: { type: GraphQLString },
      name: { type: GraphQLString },
      resource_url: { type: GraphQLString },
      cover_url: { type: GraphQLString },
      video: { type: GraphQLBoolean },
      type: { type: GraphQLString },
    }
  });

exports.ResourcesType = ResourcesType;
