import { useState, useEffect } from "react";
import Card from "../components/Card";
import MainLayout from "../components/MainLayout";
import TableHeader from "../components/TableHeader";
import { graphqlClient } from "../libs/graphqlClient";

import { GET_ALL_HISTORIES } from "./GetAllHistories.js";
// import { useQuery, useLazyQuery, InMemoryCache } from "@apollo/client";

const Index = ({ serverData }) => {
  const client = graphqlClient()
  
  const [state, setState] = useState([...serverData.launchesPast]);
  const [selected, setSelect] = useState([]);
  
  async function handleClick() {
    const { data } = await client.query({
      query: GET_ALL_HISTORIES,
      variables: { limit: 10 },
    });
    setState(() => [...data.launchesPast]);
  }
  

  // localStorage
  useEffect(() => {
    const selected = JSON.parse(localStorage.getItem("selected"));
    if (selected) {
      setSelect(selected);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem("selected", JSON.stringify(selected));
  }, [selected]);

  function getStatus(id) {
    return selected.includes(id)
  }

  const updateStatus = (id) => {
    if (selected.includes(id)) {
      setSelect((old) => old.filter((item) => item !== id));
    } else {
      setSelect((old) => [...old, id]);
    }
  };

  return (
    <MainLayout counter={selected.length}>
      <TableHeader />
      {state?.map((launch, idx) => (
        <Card
          launch={launch}
          key={`${idx}-${launch.id}`}
          updateStatusState={updateStatus}
          star={getStatus(launch.id)}
        ></Card>
      ))}
      <button onClick={handleClick}>More</button>
    </MainLayout>
  );
};

export default Index

export const getServerSideProps = async () => {
  const client = graphqlClient();
  const { data } = await client.query({
    query: GET_ALL_HISTORIES,
    variables: { limit: 2 },
  });

  return {
    props: {
      serverData: data
    },
  };
};