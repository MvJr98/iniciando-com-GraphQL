import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { loadFiles } from "@graphql-tools/load-files";

const servidor = new ApolloServer({
  typeDefs: await loadFiles("./schema/*.graphql"),
  resolvers: await loadFiles("./resolvers/*.js"),
});

const { url } = await startStandaloneServer(servidor);

console.log(`Servidor rodando em ${url}`);
