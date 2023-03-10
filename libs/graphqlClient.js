import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

// Used server and client side - can't use react hooks
export const graphqlClient = () => new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://spacex-production.up.railway.app/",
  }),
  ssrMode: typeof window === "undefined",
});
