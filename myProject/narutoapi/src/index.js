import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
//import List from './components/List'
import App from "./components/App"
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'https://api.spacex.land/graphql/',
});


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider value={client}>
    <App />
  </Provider>,
  rootElement
);