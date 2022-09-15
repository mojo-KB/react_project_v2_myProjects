import {gql} from '@apollo/client';


export const GET_GEN_3 = gql`
    query getGen3 {
        characters(filter: {village: "leaf"}) {
          info {
            count
            pages
            next
            prev
          }
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
`;
