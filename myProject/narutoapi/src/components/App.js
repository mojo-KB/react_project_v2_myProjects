import { useQuery } from '@apollo/client';
import { GET_GEN_3 } from '../gql/Query'


function App() {
    const {data } = useQuery(GET_GEN_3)
    console.log(data)
}

export default App;