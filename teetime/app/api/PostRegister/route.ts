import { pool } from '../../Pool';
import { HashPassword } from '../../PasswordManager';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';



export async function POST(request: Request): Promise<Response> {
  const requestData = await request.json();
  // console.log(requestData);
  let username = requestData['username'];
  let password = requestData['password'];
  let bio = requestData['bio'];
  let handicap = requestData['handicap'];


  RegisterUser(username, password, bio, handicap);
  console.log('Done')
  return new Response('hello next', {
    status: 201,
  })
}

async function RegisterUser(username: string, password: string, bio: string, handicap: number): Promise<string> {
  try {
    const client = await pool.connect();

    // const upidResult = await client.query("SELECT uuid_generate_v4();");
    // const upid = upidResult.rows[0];

    const InsertGolfer = await client.query("INSERT INTO golfer(golferid, pfplink, bio, handicap, username, password)values(uuid_generate_v4(), 'pfplink', '" + bio + "', " + handicap + ", '" + username + "', '" + (await HashPassword(password)).toString() + "');");

    client.release();
    return username;
  } catch (error) {
    console.error("Error adding data: ", error);
    throw error;
  }

}