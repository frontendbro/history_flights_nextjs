import "../styles/global.css";
import { ApolloProvider } from "@apollo/client";
import {graphqlClient} from "../libs/graphqlClient.js";

const client = graphqlClient();
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
