import Card from "../components/Card";
import MainLayout from "../components/MainLayout";

const Index = ({ histories }) => {
  return (
    <MainLayout>
      {histories.map((history) => (
        <Card history={history} key={history.id}></Card>
      ))}
    </MainLayout>
  );
};

export default Index

export async function getStaticProps({ params }) {
  console.log("params", params);
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const histories = await response.json();
  return {
    props: {
      histories,
    },
  };
}