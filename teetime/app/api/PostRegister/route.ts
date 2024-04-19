import { NextRequest, NextResponse } from 'next/server'
import { pool } from '../../Pool';
import { NextApiRequest } from 'next';
import { HashPassword } from '../../PasswordManager';
import { useRouter } from 'next/navigation';



export async function POST(request: Request) {
  const requestData = await request.json();
  // console.log(requestData);
  let username = requestData['username'];
  let password = requestData['password'];
  console.log(username, password)

  RegisterUser(username, password);

  const router = useRouter()
  router.push('/');

  return NextResponse.json({
    status: 201,
    message: 'pog'
  })
}

async function RegisterUser(username: string, password: string): Promise<string> {
  try {
    const client = await pool.connect();

    const upidResult = await client.query("SELECT uuid_generate_v4();");
    const upid = upidResult.rows[0];

    const InsertGolfer = await client.query("INSERT INTO golfer(golferid, pfplink, bio, handicap, username, password)values('" + upid + "', 'pfplink', 'bio', -1, " + username + ", " + HashPassword(password) + ");");

    client.release();
    pool.end();
    return username;
  } catch (error) {
    console.error("Error adding data: ", error);
    throw error;
  }

}