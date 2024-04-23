import { pool } from "../../Pool";
import { GetUser } from "../../Users/[uid]/GetUser";
import { CourseScore } from "../../Courses/[upid]/Scores";

async function GetScores(upid: string, username: string): Promise<CourseScore[]> {
  const client = await pool.connect();
  console.log('connected')
  const user = await GetUser(username);
  const golferid = user.GolferID
  const getScores = await client.query("SELECT * FROM scoredat WHERE upid = '" + upid + "'");
  const data = getScores.rows;
  let Scores: CourseScore[] = [];
  for (let i = 0; i < getScores.rowCount; i++) {
    Scores.push({
      Score: data[i].score,
      User: data[i].uid,
      Upid: data[i].upid,
      Date: new Date(Date.now())
    })

  }
  client.release();
  return Scores;
}

export async function POST(request: Request): Promise<Response> {
  const requestData = await request.json();
  // console.log(requestData);
  let upid = requestData['upid']
  let username = requestData['username'];
  let password = requestData['password'];
  const response = await fetch('/LoginRequest', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  if (response.status == 201) {
    const success = await GetScores(upid, username);

    return new Response('Sucess', {
      status: 201,
    })

  }

  return new Response('Failed', {
    status: 400,
  })
}