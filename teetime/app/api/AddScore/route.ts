import { pool } from "../../Pool";
import { GetUser } from "../../Users/[uid]/GetUser";
import { LoginUser } from "../LoginRequest/route";

async function LogScore(upid: string, username: string, score: number): Promise<boolean> {
  const client = await pool.connect();
  console.log('connected')
  const user = await GetUser(username);
  const golferid = user.GolferID
  const insertText = "INSERT INTO scoredat(score, date, upid, uid)values($1, $2, $3, $4);";
  const InsertScore = await client.query(insertText, [score, new Date(), upid, golferid]);
  client.release();
  return true;
}

export async function POST(request: Request): Promise<Response> {
  const requestData = await request.json();
  // console.log(requestData);
  let upid = requestData['upid']
  let username = requestData['username'];
  let password = requestData['password'];
  let score = requestData['score'];
  const response = await LoginUser(username, password)
  if (response) {
    const success = await LogScore(upid, username, score);
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