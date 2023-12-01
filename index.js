import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { loadFiles } from "@graphql-tools/load-files";
import Query from "./resolvers/Query.js"
import Mutation from "./resolvers/Mutation.js";



const servidor = new ApolloServer({
  typeDefs: await loadFiles("./schema/*.graphql"),
  resolvers: {...Query, ...Mutation}
});

const { url } = await startStandaloneServer(servidor);

console.log(`Servidor rodando em ${url}`);