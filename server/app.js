const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

// Initializing Express Server
const app = express();

// Setting GraphQL Endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Server Listening on PORT 4000
app.listen(4000, () => {
  console.log("Now listening on port 4000...");
});
