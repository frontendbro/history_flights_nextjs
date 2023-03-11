import { useState, useEffect } from "react";
import MainLayout from "../../components/MainLayout";

const Bookmarks = () => {
  const [selected, setSelect] = useState([]);

  const client = graphqlClient();
  const { data } = client.query({
    query: GET_ALL_HISTORIES,
    variables: {
      filter: {
      
    }},
  });

  console.log("data", data);

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
      {state?.map((launch, idx) => (
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
