import { pool } from "../../Pool";
import { GetUser } from "../../Users/[uid]/GetUser";
import { LoginUser } from "../LoginRequest/route";


async function RemoveScore(upid: string, username: string): Promise<boolean> {
  const client = await pool.connect();
  console.log('connected')
  const user = await GetUser(username);
  const golferid = user.GolferID
  const RemoveScoreScore = await client.query("DELETE FROM scoredat WHERE upid='" + upid + "' AND uid = '" + golferid + "';");
  client.release();
  return true;
}

export async function POST(request: Request): Promise<Response> {
  const requestData = await request.json();
  // console.log(requestData);
  let upid = requestData['upid']
  let username = requestData['username'];
  let password = requestData['password'];
  const response = await LoginUser(username, password)
  if (response) {
    const success = await RemoveScore(upid, username);
    if (success) {
      return new Response('Sucess', {
        status: 201,
      })
    }
  }

  return new Response('Failed', {
    status: 400,
  })
}