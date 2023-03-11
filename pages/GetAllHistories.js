import { gql } from "@apollo/client"

export const GET_ALL_HISTORIES = gql`
  query ExampleQuery($limit: Int, $offset: Int, $find: LaunchFind) {
    launchesPast(limit: $limit, offset: $offset, find: $find) {
      id
      details
      launch_date_utc
      links {
        wikipedia
        presskit
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
          first_flight
        }
      }
    }
  }
`;


