import { pool } from '../../Pool';
import { ComparePassword } from '../../PasswordManager';

async function RemoveUser(username: string, password: string): Promise<boolean> {
  try {
    const client = await pool.connect();
    console.log("connected");
    username = username.replaceAll('%20', ' ')
    const result = await client.query("SELECT password FROM golfer WHERE username = '" + username + "';")
    const testPass = result.rows[0].password;
    if (await ComparePassword(testPass, password)) {
      const deleteUser = await client.query("DELETE FROM golfer WHERE username='" + username + "';");
      return true;
    }

    client.release();
    return false;
  } catch (error) {
    console.error("Error getting data: ", error);
    throw error;
  }
}

export async function POST(request: Request) {
  const requestData = await request.json();
  // console.log(requestData);
  let username = requestData['username'];
  let password = requestData['password'];

  const User = await RemoveUser(username, password);

  if (User) {
    return new Response('Success', {
      status: 201,
    })
  }
  return new Response('Failed', {
    status: 400,
  })

}