import { pool } from "../../Pool";
import { CourseInformation } from "./getCourseTiles";


async function QueryCourses(amount: number): Promise<CourseInformation[]> {
  let CourseInfo: CourseInformation[] = [];
  try {
    const client = await pool.connect();

    console.log("connected");
    // const countResult = await client.query("SELECT COUNT(*) FROM course;");
    // const count = Math.min(countResult.rows[0].count, amount)
    // console.log(count);

    const result = await client.query("SELECT * FROM place NATURAL INNER JOIN course limit " + amount + ";")
    const data = result.rows;
    // console.log("fetched data: ", data);

    for (let i = 0; i < result.rowCount; i++) {
      CourseInfo.push({
        Name: data[i].name,
        description: data[i].description,
        address: data[i].address,
        UPID: data[i].upid,
        NumberOfHoles: data[i].numberofholes,
        Yardage: data[i].yardage
      })
    }
    client.release();
    return CourseInfo;
  } catch (error) {
    console.error("Error getting data: ", error);
    throw error;
  }
}

async function QuerySingleCourse(upid: string): Promise<CourseInformation> {
  let CourseInfo: CourseInformation = {
    Name: "",
    description: "",
    address: "",
    UPID: "",
    NumberOfHoles: 0,
    Yardage: 0
  };
  try {
    const client = await pool.connect();

    console.log("connected");

    const result = await client.query("SELECT * FROM place NATURAL INNER JOIN course WHERE upid='" + upid + "';")

    CourseInfo = {
      Name: result.rows[0].name,
      description: result.rows[0].description,
      address: result.rows[0].address,
      UPID: result.rows[0].upid,
      NumberOfHoles: result.rows[0].numberofholes,
      Yardage: result.rows[0].yardage
    }


    client.release();
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

export async function GetSingleCourse(upid: string): Promise<CourseInformation> {
  let CourseInfo: CourseInformation = await QuerySingleCourse(upid);

  return CourseInfo;

}
