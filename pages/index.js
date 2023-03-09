import Head from "next/head";
import Link from "next/link"

const Index = ({ histories }) => {
  return (
    <>
      <Head>
        <meta keywords="history flights apollo"></meta>
      </Head>
        <header>
          <h1>SpaceX Launches</h1>
          <nav>
            <Link className="link" href="/">
              Show all
            </Link>
            <Link className="link" href="/bookmarks">
              Bookmarks
            </Link>
          </nav>
        </header>
        <div>
          {histories.map((history) => (
            <div className="card" key={history.id}>
              {history.name}
            </div>
          ))}
        </div>
     
    </>
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