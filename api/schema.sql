# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

input CreateProjectDto {
  title: String!
}

type Mutation {
  createProject(createProject: CreateProjectDto!): ProjectEntity!
}

type ProjectEntity {
  id: ID!
  title: String!
}

type Query {
  getAllProject: [ProjectEntity!]!
}