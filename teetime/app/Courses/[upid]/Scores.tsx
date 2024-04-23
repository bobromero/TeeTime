import React from 'react'
import { pool } from '../../Pool';
import { GetUser } from '../../Users/[uid]/GetUser';
import Link from 'next/link';

export type CourseScore = {
  User: string,
  Upid: string,
  Score: number,
  Date: Date
}
async function GetScores(upid: string): Promise<CourseScore[]> {
  const client = await pool.connect();
  console.log('connected')
  // const user = await GetUser(username);
  // const golferid = user.GolferID
  const getScores = await client.query("SELECT * FROM scoredat WHERE upid = '" + upid + "' ORDER BY score ASC;");
  const data = getScores.rows;
  let Scores: CourseScore[] = [];
  for (let i = 0; i < getScores.rowCount; i++) {
    const result = await client.query("SELECT username FROM golfer WHERE golferid = '" + data[i].uid + "'")
    const golfername = result.rows[0].username
    Scores.push({
      Score: data[i].score,
      User: golfername,
      Upid: data[i].upid,
      Date: data[i].date
    })

  }
  client.release();
  return Scores;
}

const ScoreTiles = ({ params }: {
  params: {
    scores: CourseScore[],
    upid: string
  }
}) => {
  let tiles = [];
  for (let i = 0; i < params.scores.length; i++) {
    tiles.push(
      <div>
        <h1>

          <Link href={"/Users/" + params.scores[i].User}>{params.scores[i].User} </Link>

          Scored a {params.scores[i].Score} on {params.scores[i].Date.toDateString()}!</h1>
        <Link href={'/UpdateScore/' + params.upid}>Update Score</Link>
        <Link href={'/RemoveScore/' + params.upid} >Remove Score</Link>
      </div>
    )
  }

  return tiles
}

const Scores = async ({ params }: { params: { upid: string } }) => {
  const scores: CourseScore[] = await GetScores(params.upid)
  return (
    <div>
      <ScoreTiles params={{ scores, upid: params.upid }} />

    </div>
  )
}

export default Scores