import { pool } from '../../Pool';
import { ComparePassword } from '../../PasswordManager';

async function RemoveCourse(upid: string, password: string): Promise<boolean> {
  try {
    const client = await pool.connect();
    console.log("connected");

    const result = await client.query("SELECT password FROM golfer WHERE username = 'admin';")
    const hashedpassword = result.rows[0].password;
    const isadmin = await ComparePassword(hashedpassword, password);

    if (isadmin) {
      const deleteCourse = await client.query("DELETE FROM place WHERE upid='" + upid + "';");
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
  let upid = requestData['upid'];
  let password = requestData['password'];
  console.log(password)
  const Course = await RemoveCourse(upid, password);

  if (Course) {
    return new Response('success', {
      status: 201,
    })
  }
  return new Response('failed', {
    status: 400,
  })
}