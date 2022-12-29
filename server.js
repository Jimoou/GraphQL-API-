import { ApolloServer, gql } from "apollo-server-express";

const typeDefs = gql`



`;

const server = new ApolloServer({typeDefs})

server.listen().then(({url}) => {
    console.log(`Running on ${url}`)
});

