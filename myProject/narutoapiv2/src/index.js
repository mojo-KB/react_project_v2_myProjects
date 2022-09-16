import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import LeafNinja from './leafNinja';

const client = new ApolloClient({
  uri: 'https://narutoql.up.railway.app/graphql/',
  cache: new InMemoryCache(),
});

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <h1> Leaf Ninja </h1>
    <LeafNinja />
  </ApolloProvider>,
);