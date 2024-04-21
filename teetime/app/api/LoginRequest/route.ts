import { pool } from '../../Pool';
import { HashPassword, ComparePassword } from '../../PasswordManager';
import { NextResponse } from 'next/server';



export async function POST(request: Request): Promise<Response> {
  const requestData = await request.json();
  // console.log(requestData);
  let username = requestData['username'];
  let password = requestData['password'];


  const success = await LoginUser(username, password);

  if (success) {
    return new Response('Success', {
      status: 201,
    })
  }

  return new Response('failed', {
    status: 422,
  })
}

async function LoginUser(username: string, password: string): Promise<boolean> {
  try {
    const client = await pool.connect();

    const data = await client.query("SELECT password FROM golfer WHERE username = '" + username + "';");
    const GolferPW = data.rows[0].password;
    const IsCorrectPassword = await ComparePassword(GolferPW, await password);
    if (IsCorrectPassword) {
      client.release();
      return true;
    }
    client.release();
    throw new Error('Error Verifying: password did not match a user')
  } catch (error) {
    console.error("Error Verifying: ", error);
    throw error;
  }

}