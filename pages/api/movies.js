// import {connectToDatabase} 

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("sample_mflix");

  let users = await db.collection("comments").find({}).toArray();
  users = JSON.parse(JSON.stringify(comments));

  return {
    props: { users },
  };
}