import { NextResponse } from 'next/server'
import { pool } from '../../Pool';
import { ComparePassword } from '../../PasswordManager';

async function UpdateGolfer(username: string, password: string, bio: string, handicap: number): Promise<boolean> {
  try {
    const client = await pool.connect();
    console.log("connected");
    username = username.replaceAll('%20', ' ')

    const result = await client.query("SELECT password FROM golfer WHERE username = '" + username + "';")
    const resultPass = result.rows[0].password;
    const IsAuth = await ComparePassword(resultPass, password);
    if (IsAuth) {
      const UpdateGolfer = await client.query("UPDATE golfer SET bio = '" + bio + "', handicap = " + handicap + " WHERE username='" + username + "';");
    }



    client.release();
    return IsAuth;
  } catch (error) {
    console.error("Error adding data: ", error);
    throw error;
  }
}

export async function POST(request: Request) {
  const requestData = await request.json();
  // console.log(requestData);
  let username = requestData['username'];
  let password = requestData['password'];
  let newBio = requestData['bio']
  let newHandicap = requestData['handicap']

  const User = await UpdateGolfer(username, password, newBio, newHandicap);

  if (User) {
    return new Response('User Updated', {
      status: 201,
    })
  }

  return new Response('Error updating user', {
    status: 400,
  })
}