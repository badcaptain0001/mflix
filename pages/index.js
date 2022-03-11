import clientPromise from "../lib/mongodb";
export default function Home({ users }) {








  return (
    <> <style type="text/css" id="maincss" dangerouslySetInnerHTML={{
      __html: `
      .userName{
        color: red;
      }
      `}}>


      </style>
    <div className="container">
        <div>
          {users.map((user, index) => {
            return (
              <div className="card" key={index}>
                <h2 className="userName">{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.movie_id}</p>
                <p>{user.text}</p>
                <p>{user.date}</p>
              </div>
            );
          })}
        </div>
      </div></>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("sample_mflix");

  let users = await db.collection("comments").find({}).toArray();
  users = JSON.parse(JSON.stringify(users));

  return {
    props: { users },
  };
}