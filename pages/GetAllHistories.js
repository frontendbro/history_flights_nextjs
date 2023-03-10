import { gql } from "@apollo/client"

export const GET_ALL_HISTORIES = gql`
  query ExampleQuery($limit: Int, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      details
      launch_date_utc
      links {
        wikipedia
      }
      mission_name
      rocket {
        rocket_name
        rocket {
          name
          stages
          engines {
            layout
            number
          }
          active
        }
      }
    }
  }
`;


