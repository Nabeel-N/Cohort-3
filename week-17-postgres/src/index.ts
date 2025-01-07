import { Client } from "pg";
import express from "express";

const app = express(); // Correct: Call express() to create an app instance

app.use(express.json()); // Add middleware to parse JSON request bodies

// PostgreSQL client setup
const pgClient = new Client({
  connectionString:
    "postgresql://neon-db_owner:b5duOia1xwhB@ep-royal-snow-a5ip9dmv.us-east-2.aws.neon.tech/neon-db?sslmode=require",
});

pgClient
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
  })
  .catch((err) => {
    console.error("Failed to connect to PostgreSQL database", err);
  });

// Signup route
app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const city = req.body.city;
  const country = req.body.country;
  const street = req.body.street;
  const pincode = req.body.pincode;

  try{
    const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1 ,$2 ,$3) RETURNING id;`
    const addressInsertQuery = `INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5);`

  await pgClient.query('BEGIN;')
  const response = await pgClient.query(insertQuery , [username , email  , password] );
  const userId =   response.rows[0].id;
  const addressInsertResponse = await pgClient.query(addressInsertQuery, [userId, city, country, street, pincode]);
  await pgClient.query('COMMIT;')
    
  res.json({
    message:"You have been signed UP"
  })
 
  } catch(e){
  console.log(e);
  res.json({
    message:"Error while signing UP"
  })    
  }


});


// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});




