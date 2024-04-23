import React from 'react'
import { pool } from '../../Pool';
import { CourseScore } from '../../Courses/[upid]/Scores';
import Link from 'next/link';
import { GetSingleCourse } from '../../CourseSearch/[numSearch]/GetCourses';


async function GetScores(golferid: string): Promise<CourseScore[]> {
  if (golferid == null) {
    return [];
  }
  const client = await pool.connect();
  console.log('connected')
  // const user = await GetUser(username);
  // const golferid = user.GolferID
  const getScores = await client.query("SELECT * FROM scoredat WHERE uid = '" + golferid + "' ORDER BY score ASC;");

  const data = getScores.rows;
  let Scores: CourseScore[] = [];
  const result = await client.query("SELECT username FROM golfer WHERE golferid = '" + golferid + "'")
  const golfername = result.rows[0].username
  for (let i = 0; i < getScores.rowCount; i++) {

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


const ScoreTiles = async ({ params }: {
  params: {
    scores: CourseScore[],
    uid: string
  }
}) => {
  let tiles = [];
  for (let i = 0; i < params.scores.length; i++) {
    tiles.push(
      <div>
        <h1>
          Scored a {params.scores[i].Score} at the
          <Link href={'/Courses/' + params.scores[i].Upid}> {(await GetSingleCourse(params.scores[i].Upid)).Name} </Link>


          Golf Course on {params.scores[i].Date.toDateString()}!</h1>
        <Link href={'/UpdateScore/' + params.scores[i].Upid}>Update Score</Link>
        <Link href={'/RemoveScore/' + params.scores[i].Upid} >Remove Score</Link>
      </div>
    )
  }

  return tiles
}

const UserScores = async ({ params }: {
  params: {
    golferid: string
  }
}) => {
  const Scores: CourseScore[] = await GetScores(params.golferid);
  return (
    <div>
      <ScoreTiles params={{ scores: Scores, uid: params.golferid }} />


    </div>
  )
}

export default UserScores