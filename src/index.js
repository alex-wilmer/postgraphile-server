require("dotenv").config();
const pg = require("pg");
const { ApolloServer } = require("apollo-server");
const { makeSchemaAndPlugin } = require("postgraphile-apollo-server");
// const { makeAddInflectorsPlugin } = require("graphile-utils");
const PgSimplifyInflectorPlugin = require("@graphile-contrib/pg-simplify-inflector");

const pgPool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

// const x = makeAddInflectorsPlugin(
//   {
//     createUserAccountType(typeName: string) {
//       return this.upperCamelCase(`${typeName}-change-set`);
//     },
//   },
//   /* Passing true here allows the plugin to overwrite
//    * existing inflectors.
//    */
//   true
// );

async function main() {
  const { schema, plugin } = await makeSchemaAndPlugin(
    pgPool,
    "public", // PostgreSQL schema to use
    {
      // PostGraphile options, see:
      // https://www.graphile.org/postgraphile/usage-library/
      appendPlugins: [PgSimplifyInflectorPlugin],
    }
  );

  const server = new ApolloServer({
    schema,
    plugins: [plugin]
  });

  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
