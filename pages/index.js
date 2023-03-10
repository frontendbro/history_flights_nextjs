import Card from "../components/Card";
import MainLayout from "../components/MainLayout";
import TableHeader from "../components/TableHeader";
import { graphqlClient } from "../libs/graphqlClient";

import { GET_ALL_HISTORIES } from "./GetAllHistories.js";

const Index = ({data}) => {
  return (
    <MainLayout>
      <TableHeader />
      {data?.launchesPast.map((launch) => (
        <Card launch={launch} key={launch.id}></Card>
      ))}
    </MainLayout>
  );
};

export default Index

export const getServerSideProps = async () => {
  const client = graphqlClient();
  const { data } = await client.query({
    query: GET_ALL_HISTORIES,
    variables: { limit: 10 },
  });

  console.log(data);
  return {
    props: {
      data
    },
  };
};