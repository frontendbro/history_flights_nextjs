import { useState, useEffect } from "react";
import { graphqlClient } from "../../libs/graphqlClient";
import { GET_ALL_HISTORIES } from "../GetAllHistories";

import MainLayout from "../../components/MainLayout";
import Card from "../../components/Card";
import TableHeader from "../../components/TableHeader";

import { useQuery, useLazyQuery, InMemoryCache } from "@apollo/client";


const Bookmarks = () => {
  // const [state, setState] = useState([]);
  const [selected, setSelect] = useState([]);

  // const { data: initData, loading: initLoading } = useQuery(GET_ALL_HISTORIES, {
  //   variables: { limit: 100 },
  // });
  // console.log("initData", initData);

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
    return selected.includes(id);
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
    </MainLayout>
  );
};

export default Bookmarks;
