import Link from 'next/link';
import React from 'react'

import { TileInformation, GetCourseTiles } from './getCourseTiles';



const Tiles = async ({ num }: { num: any }) => {
  if (num == 'src') {
    return;
  }
  let TileInfo: TileInformation[] = await GetCourseTiles(num);
  num = Math.min(TileInfo.length, num)
  const elements = [];
  for (let i = 0; i < num; i++) {
    elements.push(
      <Link href={'/Courses/' + TileInfo[i].UPID}>
        <img src='src' />
        <h1>{TileInfo[i].Name}</h1>
        <p>{TileInfo[i].description}</p>
        <p>{TileInfo[i].address}</p>

      </Link>
    )

  }
  return elements;
}

const CourseTiles = ({ params }: { params: { numSearch: any } }) => {
  if (params.numSearch == 'src') {
    return;
  }
  return (
    <div>
      <h1>Courses</h1>
      <Tiles num={params.numSearch} ></Tiles>

    </div>
  )
}

export default CourseTiles