import { useQuery } from '@apollo/client';
import { GET_GEN_3 } from '../gql/Query'


function App() {
    const { loading, error, data } = useQuery(GET_GEN_3);
   
    return (
        <div className="App">
          <header className="App-header">
            {loading ? (
              <img className="App-logo" alt="logo" />
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <div>
                {data.pokemon_v2_pokemonspecies.map((pokemon) => {
                  return (
                    <p key={pokemon.key}>
                      {pokemon.id} {pokemon.name}
                    </p>
                  );
                })}
              </div>
            )}
          </header>
        </div>
      );
 }

export default App;