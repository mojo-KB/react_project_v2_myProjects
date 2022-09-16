// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';


const GET_CHARACTERS = gql`
query GetCharacters{
	characters(filter: {village: "leaf"}) {
    results {
      _id
      name
      avatarSrc
      description
      rank
      village
    }
  }
}
`


function DisplayCharacters() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return data.characters.results.map(({_id, name, avatarSrc, description, rank, village }) => (
    <div key={_id}>
      <h3> {name} </h3>
      <img width="200" height="200" alt="Ninja" src={ `${avatarSrc}`} />
      <br />

      <b>Description</b>
      <p>{description}</p>
      <br />

      <b>Rank</b>
      <p>{ rank }</p>
      <b>From</b>
      <p>{ village }</p>
    </div>
  ));

}

export default function App() {
  return (
    <div>
      <DisplayCharacters />
    </div>
  );
}