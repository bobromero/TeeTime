import { pool } from "../../Pool";
import { CourseInformation } from "./getCourseTiles";


async function QueryCourses(amount: number): Promise<CourseInformation[]> {
  let CourseInfo: CourseInformation[] = [];
  try {
    const client = await pool.connect();

    console.log("connected");
    const countResult = await client.query("SELECT COUNT(*) FROM course;");
    const count = Math.min(countResult.rows[0].count, amount)
    // console.log(count);

    const result = await client.query("SELECT * FROM place NATURAL INNER JOIN course limit " + count + ";")
    const data = result.rows;
    // console.log("fetched data: ", data);

    for (let i = 0; i < result.rowCount; i++) {
      CourseInfo.push({
        Name: result.rows[i].name,
        description: result.rows[i].description,
        address: result.rows[i].address,
        UPID: result.rows[i].upid,
        NumberOfHoles: result.rows[i].numberofholes,
        Yardage: result.rows[i].yardage
      })
    }
    client.release();
    pool.end();
    return CourseInfo;
  } catch (error) {
    console.error("Error getting data: ", error);
    throw error;
  }
}


export async function GetCourses(count: number): Promise<CourseInformation[]> {
  let CourseInfo: CourseInformation[] = await QueryCourses(count);

  return CourseInfo;
}
