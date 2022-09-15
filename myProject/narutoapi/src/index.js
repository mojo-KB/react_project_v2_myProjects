import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
//import List from './components/List'
import App from "./components/App"
//import { createClient, Provider } from 'urql';

import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
});

client
.query({
  query: gql`
    query GetLocations {
      locations {
        id
        name
        description
        photo
      }
    }
  `,
})
.then((result) => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);