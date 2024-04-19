const { Pool, Client } = require('pg');

//import { CourseInformation } from "./getCourseTiles";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "123",
  port: 5432
})


const imnotinsane = async () => {
  try {
    const client = await pool.connect();

    console.log("connected");
    const countResult = await client.query("SELECT COUNT(*) FROM course;");
    const count = countResult.rows[0].count
    console.log(count);

    const result = await client.query("SELECT * FROM place NATURAL INNER JOIN course limit " + count + ";")
    const data = result.rows;
    console.log("fetched data: ", data);

    client.release();
    pool.end();
  } catch (error) {
    console.error("Error getting data: ", error);
    throw error;
  }
}


imnotinsane();