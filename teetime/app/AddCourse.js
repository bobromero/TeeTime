const { Pool, Client } = require('pg');


const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "123",
  port: 5432
})


async function AddCourseToDB(name, address, description, holes, yardage) {
  try {
    const client = await pool.connect();

    console.log("connected");

    const upidResult = await client.query("SELECT uuid_generate_v4();");
    const upid = upidResult.rows[0];

    const InsertPlace = await client.query("INSERT INTO place(name, address, description, upid)values('" + name + "', '" + address + "', '" + description + "', " + upid + ");");

    const InsertCourse = await client.query("INSERT INTO course(numberofholes,yardage,upid)values(" + holes + "," + yardage + ", '" + upid + "');")

    console.log("inserted place and course");

    client.release();
    pool.end();
  } catch (error) {
    console.error("Error adding data: ", error);
    throw error;
  }
}

AddCourseToDB("Course heaven", "123 Gaines st", "holy holf", 18, 8997);
