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

  const AllResourcesType = new GraphQLObjectType({
    name: "AllResources",
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

  const AddResourceType = new GraphQLObjectType({
    name: "AddResource",
    type: "Query",
    fields: {
      name: { type: GraphQLString },
      resource_url: { type: GraphQLString },
      cover_url: { type: GraphQLString },
      video: { type: GraphQLBoolean },
      type: { type: GraphQLString },
    }
  });

exports.ResourcesType = ResourcesType;
exports.AllResourcesType = AllResourcesType;
exports.AddResourceType = AddResourceType;