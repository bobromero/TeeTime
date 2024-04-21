import { NextResponse } from 'next/server'
import { pool } from '../../Pool';

async function UpdateCourse(upid: string, name: string, address: string, description: string, holes: number, yardage: number): Promise<boolean> {
  try {
    const client = await pool.connect();

    console.log("connected");

    const UpdatePlace = await client.query("UPDATE place SET name = '" + name + "', address = '" + address + "', description = '" + description + "' WHERE upid='" + upid + "';");

    const UpdateCourse = await client.query("UPDATE course SET numberofholes = " + holes + ", yardage = " + yardage + " WHERE upid='" + upid + "';");

    console.log("inserted place and course");

    client.release();
    return true;
  } catch (error) {
    console.error("Error adding data: ", error);
    throw error;
  }
}

export async function POST(request: Request) {
  const requestData = await request.json();
  // console.log(requestData);
  let upid = requestData['upid']
  let coursename = requestData['name'];
  let address = requestData['address'];
  let description = requestData['description'];
  let yardage = requestData['yardage'];
  let numberofholes = requestData['numberofholes'];
  const IsUpdateSuccessful = await UpdateCourse(upid, coursename, address, description, numberofholes, yardage);
  return new Response('Success', {
    status: 201,
  })
}