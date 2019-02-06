const fs = require('fs');
const path = require('path');

const { GraphQLServer } = require('graphql-yoga');

const launchRepository = require('./repository/launchRepository');
const rocketRepository = require('./repository/rocketRepository');

const typeDefs = fs.readFileSync(path.resolve(__dirname, 'schema.graphql'), 'utf-8');
const resolvers = {
    Query: {
        launches: (parent, params, context) => {
            return context.launchRepository.getAll();
        },
        launch: (parent, params, context) => {
            return context.launchRepository.get(params.id);
        },
        rockets: (parent, params, context) => {
            return context.rocketRepository.getAll();
        }
    },
    Mutation: {
        createRocket: (parent, params, context) => {
            const data = {name: params.name};
            const rocket = context.rocketRepository.save(data);

            return rocket;
        }
    },
    Launch: {
        rocket: (parent, params, context) => {
            return context.rocketRepository.get(parent.rocket_id);
        }
    },
    Rocket: {
        useless: () => {
            throw new Error('Non');
        }
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: {
        launchRepository, rocketRepository,
    }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
