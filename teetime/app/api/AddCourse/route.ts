import { NextRequest, NextResponse } from 'next/server'
import { pool } from '../../Pool';


async function AddCourseToDB(name: string, address: string, description: string, holes: number, yardage: number): Promise<string> {
  try {
    const client = await pool.connect();

    console.log("connected");

    const upidResult = await client.query("SELECT uuid_generate_v4();");
    const upid: string = upidResult.rows[0].uuid_generate_v4;

    const InsertPlace = await client.query("INSERT INTO place(name, address, description, upid)values('" + name + "', '" + address + "', '" + description + "', '" + upid + "');");

    const InsertCourse = await client.query("INSERT INTO course(numberofholes,yardage,upid)values(" + holes + "," + yardage + ", '" + upid + "');")

    console.log("inserted place and course");

    client.release();
    return upid;
  } catch (error) {
    console.error("Error adding data: ", error);
    throw error;
  }
}


export async function POST(request: Request) {
  const requestData = await request.json();
  // console.log(requestData);
  let coursename = requestData['name'];
  let address = requestData['address'];
  let description = requestData['description'];
  let yardage = requestData['yardage'];
  let numberofholes = requestData['numberofholes'];
  const upid = await AddCourseToDB(coursename, address, description, numberofholes, yardage);
  return new Response(upid, {
    status: 201,
  })
}
