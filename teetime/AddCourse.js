const { Pool, Client } = require('pg');

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "123",
  port: 5432
})
// const client = await pool.connect();
export function AddCourseToDB(name, address, description, holes, yardage) {

  pool.query("INSERT INTO place(name, address, description, upid)values('" + name + "', '" + address + "', '" + description + "', uuid_generate_v4());", (err, res) => {
    console.log(err, res);
    console.log("first insert");
    let upid;
    pool.query("SELECT upid FROM place WHERE name = '" + name + "' AND address = '" + address + "' AND description = '" + description + "';", (err, res) => {
      //console.log(err, res)
      console.log(res.rows[0].upid)
      upid = res.rows[0].upid;
      pool.query("INSERT INTO course(numberofholes,yardage,upid)values(" + holes + "," + yardage + ", '" + upid + "');", (err, res) => {
        //console.log(err, res)
        console.log("second Insert");
        pool.end();
      });
    });
  });
}

AddCourseToDB("Jake Gaither", "123 Gaines st", "cheapest golf around", 9, 4579);
