import { useState, useEffect } from "react";
import Card from "../../components/Card";
import MainLayout from "../../components/MainLayout";
import TableHeader from "../../components/TableHeader";

import { GET_ALL_HISTORIES } from "../GetAllHistories.js";
import { useQuery } from "@apollo/client";

const Index = () => {
  const [selected, setSelect] = useState([]);

  const { data: initData } = useQuery(GET_ALL_HISTORIES, {
    variables: {
      limit: 10
    },
  });

  const resData = initData?.launchesPast.filter(item => selected.includes(item.id)) || []

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
      {resData.map((launch, idx) => (
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

export default Index;
