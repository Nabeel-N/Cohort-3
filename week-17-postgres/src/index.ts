import { Client } from "pg";

const pgClient = new Client(
  "postgresql://neon-db_owner:b5duOia1xwhB@ep-royal-snow-a5ip9dmv.us-east-2.aws.neon.tech/neon-db?sslmode=require"
);

async function main() {
  pgClient
    .connect()
    .then(() => {
      console.log("Connected to Postgres");
    })
    .catch((err) => {
      console.error("Error connecting to Postgres", err);
    });

  // create a table
  await pgClient.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL
    )
  `);
  // insert a row
  await pgClient.query(`
    INSERT INTO users (name) VALUES ('Alice')
  `);
  // select all rows
  const { rows } = await pgClient.query(`
    SELECT * FROM users
  `);
  console.log("Rows:", rows);
}
main();
