import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
//import List from './components/List'
import App from "./components/App"
//import { createClient, Provider } from 'urql';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"
import React from 'react'

const client = new ApolloClient({
  uri: "https://narutoql.up.railway.app/graphql",
  cache: new InMemoryCache()
})
// function App() {
//   return (
//     <div className="container">
//       <nav className="navbar sticky-top navbar-light bg-dark">
//         <h1 className='navbar-brand text-light'>Naruto</h1>
//       </nav>
//     </div>
//   )
// }


ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
)
