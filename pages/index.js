import { useState, useEffect } from "react";
import Card from "../components/Card";
import MainLayout from "../components/MainLayout";
import TableHeader from "../components/TableHeader";
import { graphqlClient } from "../libs/graphqlClient";

import { GET_ALL_HISTORIES } from "./GetAllHistories.js";
import { useQuery, useLazyQuery, InMemoryCache } from "@apollo/client";

const Index = ({ serverData }) => {
  const [selected, setSelect] = useState([]);

  const {data: initData, loading: initLoading} = useQuery(GET_ALL_HISTORIES, {
    variables: { limit: 2 },
  });

  const [getMore, {data: moreData}] = useLazyQuery(GET_ALL_HISTORIES, {
    variables: { limit: 10 },
  });
  

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
      {initData?.launchesPast.map((launch, idx) => (
        <Card
          launch={launch}
          key={`${idx}-${launch.id}`}
          updateStatusState={updateStatus}
          star={getStatus(launch.id)}
        ></Card>
      ))}
      <button className="btn-more" onClick={getMore}>
        {initLoading ? "loading..." : "More"}
      </button>
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